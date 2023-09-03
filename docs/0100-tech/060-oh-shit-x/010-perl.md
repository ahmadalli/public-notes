---
sidebar_position: 10
---

# Oh Shit, Perl

:::info

You can access to this page from [ohshitperl.com](https://ohshitperl.com), [ohshit.foo/perl](https://ohshit.foo/perl) or [ohshit.bar/perl](https://ohshit.bar/perl).

:::

## Operators

Perl has [a lot of operators](https://perldoc.perl.org/perlop), and some of them are a bit weird. Here are some of them:

### `==`

These are all `true`:

```perl
1 == 1
1 == 1.0
1 == "1"
1 == "1.0"
1 == "a1.0aa\n"
"foo" == "bar"; # because why not?
```

This happens because `==` is for numbers only, and strings without any numbers in them would be casted to `0`, and so in Perl's world `"foo" == "bar"`. For strings `eq` should be used instead.

### `+`

`+` is for numbers which is why `string` + `int` returns int, even if the string isn't completely made of numbers:

```perl
print "123aaa" + 2; # this will return 125
```

[<icon icon="fa-brands fa-stack-overflow" size="lg" /> This is used](https://stackoverflow.com/a/8539065/1003464) to convert strings to int as well.

### q and qq

You can change `'` and `"` using `q` and `qq` operator:

```perl
my $var = "Hello World from \"$_\"";
my $easy_var = qq\Hello World from "$_"\;
my $weird_syntax = qq qHello World from \qq;
```

### <=>

The `<=>` (which could be a method, like `CompareTo` in C#) returns `-1`, `0`, or `1` based on the comparison result. It's used to compare numbers, and it's used in `sort` method.

```perl
my @sorted = sort { $a <=> $b } @unsorted;
```

### => (Fat Comma) and ,=> (Winking Fat Comma)

`=>`, called fat command has similar functionality to `,` (comma), with additional functionality of automatically quoting the left side. It's a syntactic sugar used for hashes:

```perl
my %hash = (a => 1, b => 2, c => 3);
my @array = (a => b => c => d); # there's nothing special about =>, it's just a comma with left side quoting
```

and if you don't want the left side to be quoted, you can use `,=>` (winking fat comma).

### =~

`=~` doesn't have a consistent behavior. It returns a list of matches when used with `m/.../` to match the left side with the regex on the right side, but it's a binding operator when used with `s/.../.../` to replace the left side with the right side.

Also it can be used inside a while loop to iterate over matches:

```perl
my $str = "hello world this is a test for regex in perl";
while ($str =~ /(\w+)/g) {
  print "Word is $1, ends at position ", pos $str, "\n";
}
```

### Precedence

- [Operator Precedence and Associativity](https://perldoc.perl.org/perlop#Operator-Precedence-and-Associativity)
- [<icon icon="fa-brands fa-stack-overflow" size="lg" /> Why do Perl's logical operators &&, ||, ! take precedence over and, or, and not?](https://stackoverflow.com/q/15193327/1003464)

### Secret Operators

[perlsecret - Perl secret operators and constants](https://metacpan.org/dist/perlsecret/view/lib/perlsecret.pod)

## Arrays, Hashes, and Lists

- Lists aren't data structures, they're just a way to group values together. They would be stored in memory either as an array or a hash when assigned to a variable.
- You can have a scalar, an array, and a hash with the same name.
  ```perl
  my $var = "scalar";
  my @var = ("array");
  my %var = ("hash" => "value");
  print "\$var = $var\n\@var = @var\n\%var = %var\n";
  ```
- To get values out of arrays and hashes, you need to indicate the expected output type with `$` (scalar), `@` (array), or `%` (hash) sigils prefixes, and `[]` for arrays or `{}` for hashes:

  ```perl
  my @array = ("a", "b", "c", "d");
  my %hash = ("a" => 1, "b" => 2, "c" => 3);
  print "array[0] = $array[0]\n";
  print "hash{a} = $hash{a}\n";
  print qq/hash out of array = @hash{"a", "b"}\n/;
  print qq/array out of hash = %array{"a", "b"}\n/;
  ```

  This can get very confusing if you reuse variable names for different types:

  ```perl
  my @var = ("a", "b", "c", "d");
  my %var = ("a" => 1, "b" => 2, "c" => 3);
  my $var = "scalar";

  print "\$var{a} = $var{a}\n"; # prints 1, returns scalar from hash
  print "\$var[0] = $var[0]\n"; # prints a, returns scalar from array
  print qq/\@var{"a", "b"} = @var{a, b}\n/; # prints 1 2, returns array (because of @) from hash (because of {})
  print qq/\%var[0,1] = %var{"a", "b"}\n/; # prints 0 => a, 1 => b, returns hash (because of %) from array (because of [])
  ```

- List of lists is not a 2D array, it'll be flattened into a 1D array:

  ```perl
  my @array = (1, 2, 3, (4, 5, 6), 7, 8, 9);
  print "@array\n"; # prints 1 2 3 4 5 6 7 8 9
  ```

- To create a 2D array, you need to use references:

  ```perl
  my @array = (1, 2, 3, [4, 5, 6], 7, 8, 9);
  print "@array\n"; # prints 1 2 3 ARRAY(0x1f9f8a0) 7 8 9
  print "@{$array[3]}\n"; # prints 4 5 6
  ```

- You can use lists to set values of multiple variables at once:

  ```perl
  my ($a, $b, $c) = (1, 2, 3);
  print "$a $b $c\n"; # prints 1 2 3
  ```

- When initializing multiple arrays using a list, the leftmost array is greedy and takes all the values:

  ```perl
  my (@array1, $array2) = (1, 2, 3, (4, 5, 6), 7, 8, 9);
  print "@array1\n"; # prints 1 2 3 4 5 6 7 8 9
  print "$array2\n"; # prints nothing
  ```

## Flow Control

### Next, Last, Redo, and Continue

`last` is the same as `break` in C# and `next` is the same as `continue` in C#. Additionally, [`redo`](https://perldoc.perl.org/functions/redo) is used to restart the loop without reevaluating the condition and [`continue`](https://perldoc.perl.org/functions/continue) is like `finally` in exception handling, for the `next` statement.

Take the example from perldoc:

```perl
while (EXPR) {
    ### redo always comes here
    do_something;
} continue {
    ### next always comes here
    do_something_else;
    # then back the top to re-check EXPR
}
### last always comes here
```

### For and Foreach

`for` and `foreach` are the same and can be used interchangeably.

### Boolean

Perl doesn't have a boolean type, it uses falsey and truthy values instead. The falsey values are `undef`, `0`, `""`, `"0"`, and empty list, array, and hash. Everything else is truthy.

```perl
print undef ? "true" : "false"; # prints false
print 0 ? "true" : "false"; # prints false
print "" ? "true" : "false"; # prints false
print "0" ? "true" : "false"; # prints false
print "false" ? "true" : "false"; # prints true
print "0.0" ? "true" : "false"; # prints true
print () ? "true" : "false"; # prints false
my @array = ();
print @array ? "true" : "false"; # prints false
my %hash = ();
print %hash ? "true" : "false"; # prints false
```

## Subroutines

- There's no proper way to define subroutine arguments and return. Everything that's passed to the subroutine is stored in `@_` array, and you need to manually check the number of arguments and their types.
- You can call subroutines without parenthesis.

  ```perl
  sub test {
    print $_[0] . " " . $_[1] . "\n";
  }

  test "hello", "world";
  ```

- There's no proper way to define subroutine return types as well. See [wantarray](#wantarray) for more oh shit moments.
- Variables passed to the subroutine are passed by reference and if you modify values of the `@_` array, original values would be modified as well. It's a good practice to always unpack `@_`:

  ```perl
  sub test1 {
    my $arg1 = $_[0];
  }

  sub test2 {
    my $arg1 = shift; # Because it's Perl, and @_ would be the unannounced argument for shift and pop: https://perldoc.perl.org/perlvar#@_
  }

  sub test3 {
    my ($arg1, $arg2) = @_;
  }
  ```

- You can expect a hash as the subroutine's input and create a hash from `@_` on the subroutine. This approach has the benefit of copying the values, having named parameters, and being able to set default values for parameters.

  ```perl
  sub test {
    my %args = (
      first_arg = "default value",
      second_arg = undef,
      @_ # use @_ as a hash and overwrite the hash values if they exist on @_
    )
  }
  ```

  But this approach doesn't support references. `test({ second_arg = "world" });` doesn't work because in this case `$_[0]` would be a hash reference, and would not be unpacked into the hash. To support this case, you need to dereference the hash reference:

  ```perl
  sub test {
    my %args = (
      first_arg = "default value",
      second_arg = undef,
      ref($_[0]) ? %{$_[0]} : @_
    )
  }
  ```

  But note that this approach is not perfect and is error prone. For example, `test(first_arg=>"hello", { second_arg = "world" });` would not unpack `second_arg` because `ref($_[0])` would be false and `@_` would be used instead of dereferencing the hash reference.

  **To keep it simple, just use `@_` and unpack it.**

- You can [use the experimental `signatures` feature](https://www.effectiveperlprogramming.com/2015/04/use-v5-20-subroutine-signatures/) to define subroutine arguments.
- You can omit `return <something>;` and use `<something>` instead.

  ```perl
  sub test {
    return "hello";
  }

  sub test2 {
    "hello"
  }
  ```

- You can omit `$_` [in some operators and functions](https://perldoc.perl.org/perlvar#$_) to write shorter code:

  ```perl
  print for @array;
  grep { m/<some regex>/ } @array;
  ```

  This can also be used for bash one-liners:

  ```bash
  perl -ne 'print if m/<some regex>/' <file>
  ```

### wantarray

`wantarray` depends on the [**context**](https://perldoc.perl.org/functions/caller) of the function call, meaning what you're doing with the return value of the function. If you're not doing anything with the return value, it's `undef`. If you're assigning it to a scalar, it's false. If you're assigning it to a list, it's true.

This function creates a lot of confusion because there's no guarantee that the function is using `wantarray` in its implementation, and how it's using it. Therefore it's recommended to avoid using it.

## Classes

- **Other than scalar, array, and hash, there are no other data structures in Perl.**
- Object oriented programming is not built into the language, and you need to use modules to implement it. [An Object is Simply a Data Structure](https://perldoc.perl.org/perlobj#An-Object-is-Simply-a-Data-Structure).
  - There's no reserved name for constructors, and you can use any name you want. `new` is just a convention.

## More Resources

- [Raku: A Language for Gremlins](https://buttondown.email/hillelwayne/archive/raku-a-language-for-gremlins/): Rakudo is a Perl 6 implementation.
  - [<icon icon="fa-brands fa-y-combinator" size="lg" /> YC discussion](https://news.ycombinator.com/item?id=37040681)
