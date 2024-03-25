---
toc_max_heading_level: 4
---

# Oh Shit, Python

:::info

You can access to this page from [ohshitpython.com](https://ohshitpython.com), [ohshit.foo/python](https://ohshit.foo/python) or [ohshit.bar/python](https://ohshit.bar/python).

:::

## TLDR

- Beware of [GIL](#global-interpreter-lock-gil).
- Don't give default values to mutable variables, either in [function parameters](#functions) or [classes](#classes).
- In contrast to `using` in C# or `include` in C++, [`import`](#modules-and-packages) executes modules and allows you to have interdependent modules. Make sure you understand how [modules and packages](#modules-and-packages) work before using them.
- Python offers a variety of syntactic sugars, such as the ability to view class attributes through the `__dict__` attribute and the use of `@property` decorators for getter and setter methods. However, these features, if misused, can make it easier to bypass certain limitations and safeguards, potentially leading to less predictable code.

## Objects

### Everything is an Object

- Objects can be mutable or immutable
- Immutable types are the following:
  - int
  - float
  - string
  - boolean
  - tuple
  - complex
  - bytes
  - frozen set
  - `NoneType`: the type of `None`
- You can use [`dir()`](https://docs.python.org/3/library/functions.html#dir) to get a list of available attributes of an object.

### References and Reference Counting

- Variables are just references to objects.
- Immutable objects are created once and can be referenced multiple times.
- Python counts references to each object, and destroys it if there's no reference to it. You can use `sys.getrefcount(object)` to check reference count.

  ```python
  import sys

  sys.getrefcount(1)
  sys.getrefcount(42)
  sys.getrefcount(None)
  sys.getrefcount("hello")
  sys.getrefcount("sys")
  sys.getrefcount("import")
  ```

  [<Icon icon="fa-brands fa-stack-overflow" size="lg" /> There are other ways to count references as well.](https://stackoverflow.com/q/510406/1003464)

### Global Interpreter Lock (GIL)

To make reference counting thread safe and prevent race conditions, there need to be a global lock when these counts need to be updated. This approach has performance penalty on multithreaded applications. You can read more about GIL in [here](https://realpython.com/python-gil/).

The existence of GIL means that Python scripts cannot utilize multiple cores even when they are multithreaded. Python will eventually remove GIL. See the following links for more information:

- [PEP 703 – Making the Global Interpreter Lock](https://peps.python.org/pep-0703/)
- [GIL removal and the Faster CPython project](https://lwn.net/Articles/939981/)

:::tip

For I/O bound tasks, you can use `asyncio` to utilize multiple cores. For CPU bound tasks, you have to use `multiprocessing` to utilize multiple cores but multiprocessing is not as straightforward as multithreading and comes with its own problems.

:::

### Strings

- Strings are [`sequence`](https://docs.python.org/3/library/stdtypes.html#typesseq) types.
  - You can do `if "ello" in "hello": print("yes")`
  - You can iterate over them: `for c in "hello": print(c)`
  - You can slice them with indexes `"hello"[1:]`
- Multiline strings are used for multiline comments. [<Icon icon="fa-brands fa-twitter" size="lg" /> @gvanrossum's tweet](https://twitter.com/gvanrossum/status/112670605505077248)
- When used as docstrings, multiline strings are parsed and become accessible through the `__doc__` property of the object.

  ```python
  def test():
    """This is a test function"""
    return 1

  print(test.__doc__) # prints "This is a test function"
  ```

### Dictionaries

- Iterating over dictionaries returns keys by default but not in any particular order.

### Truthiness

- Every value in Python is either evaluated as `True` or `False`
- The following values are evaluated as `False`. Everything else is evaluated as `True`:
  - `None`
  - `False`
  - `0`
  - `0.0`
  - `0j`
  - `Decimal(0)`
  - `Fraction(0, 1)`
  - `""`, `[]`, `{}`, `()`, `b''`, `set()`, `range(0)`, and other empty instances of subclasses of [`collections.abc`](https://docs.python.org/3/library/collections.abc.html)
  - Objects for which `__bool__` or `__len__` method returns `False`

### Type Checking

- As demonstrated in the examples from [`collections.abc`](https://docs.python.org/3/library/collections.abc.html), `isinstance()` is more concerned with whether an object implements certain APIs than if it is a direct subclass of a specific type.

  ```python
  class E:
    def __iter__(self): ...
    def __next__(next): ...

  isinstance(E(), Iterable) # True
  ```

## Functions

- Functions can modify variables outside of their scope by using [`global`](https://docs.python.org/3/reference/simple_stmts.html#the-global-statement) or [`nonlocal`](https://docs.python.org/3/reference/simple_stmts.html#the-nonlocal-statement) keyword. **This is not recommended.**
- Functions that don't return anything return `None` by default.
- **Mutable default arguments are evaluated once when the function is defined**. This means that if you use a mutable default argument and modify it, the modified value will be used in the next function call.

  ```python
  def test(a=[]):
    a.append(1)
    print(a)

  test() # prints [1]
  test() # prints [1, 1]
  test() # prints [1, 1, 1]
  ```

  For this reason, you should use immutable (types like `None` in this case) as default arguments. You can read more about this in [here](https://docs.python-guide.org/writing/gotchas/#mutable-default-arguments).

## Modules and Packages

- `import` loads and runs the module once, then caches it for subsequent imports.
  - Because of this runtime execution behavior, you can have interdependent modules with some caveats. See [here](https://stackoverflow.com/a/746067/1003464) for more information and examples.
- Each module has a `__name__` property. If the module is executed directly, `__name__` is set to `"__main__"`. If the module is imported, `__name__` is set to the module's name.
- `__init__.py` files make a directory a package. This file executed when the package is imported.
  - To reference another module in the same package, you can use relative imports. See [here](https://realpython.com/absolute-vs-relative-python-imports/) for more information.
  - You can use `python -m <package>.<module>` to execute a module inside a package. This is useful when you want to test a module inside a package without creating a separate script.

## Classes

- Classes in Python are dictionaries with syntactic sugar. You can access class attributes with `__dict__` property.
  - This means that private attributes are not really private. You can access them with `instance._Class__private_attribute` syntax.
  - To optimize memory usage, you can utilize [`__slots__`](https://wiki.python.org/moin/UsingSlots) to specify a set of valid attribute names.
- [<Icon icon="fa-brands fa-stack-overflow" size="lg" /> `__init__` is not a constructor](https://stackoverflow.com/a/28791753/1003464).
- [<Icon icon="fa-brands fa-stack-overflow" size="lg" /> `super` isn't like `base` on C family languages.](https://stackoverflow.com/a/21639994/1003464). It doesn't call the parent but the next class in the [method resolution order](https://www.python.org/download/releases/2.3/mro/).
- If `get_<property_name>` and `set_<property_name>` methods are defined, they'd be used when you work with `instance.<property_name>`. See [here](https://docs.python.org/3/reference/datamodel.html#customizing-attribute-access) for more information.
- Variables that are defined under the class definition are class properties. They are shared between instances. **Mutable class properties are disasters waiting to happen.**
  ```python
  class Test:
    a = [] # This is a dangerous class property
  ```
- Methods that are defined under the class definition with `@classmethod` decorator are class methods. The first argument of a class method is the class itself.

  ```python
  class Test:
    a = 1
    @classmethod
    def test(cls):
      print(f"test {cls.a}") # note the cls argument
  ```

- Class properties and methods don't need an instance to be accessed. You can access them with `Class.<property_name>` or `Class.<method_name>()`.
- Methods that are defined under the class definition with `@staticmethod` decorator are static methods. They don't have access to the class or the instance. They are just like regular functions that are defined inside the class. You can read more about the differences between class methods and static methods in [<Icon icon="fa-brands fa-stack-overflow" size="lg" /> this StackOverflow answer](https://stackoverflow.com/a/1950927/1003464).
- [`Dataclasses`](https://docs.python.org/3/library/dataclasses.html) define classes that are used to store data. They are like `struct`s in C.

:::note

Check out [Super considered super! talk by Raymond Hettinger](https://www.youtube.com/watch?v=EiOglTERPEo) for more information about classes.

:::

## More Resources

- [<Icon icon="fa-brands fa-github" size="lg" /> What the f*ck Python! 😱](https://github.com/satwikkansal/wtfpython)
  - [<Icon icon="fa-brands fa-y-combinator" size="lg" /> YC discussion](https://news.ycombinator.com/item?id=37281692)
