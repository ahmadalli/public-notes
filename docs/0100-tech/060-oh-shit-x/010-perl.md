---
sidebar_position: 10
---

# Oh Shit, Perl

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

## Arrays, Hashes, and Lists

- Lists aren't data structures, they're just a way to group values together.
- You can have a scalar, an array, and a hash with the same name.
  ```perl
  my $var = "scalar";
  my @var = ("array");
  my %var = ("hash" => "value");
  print "\$var = $var\n\@var = @var\n\%var = %var\n";
  ```
