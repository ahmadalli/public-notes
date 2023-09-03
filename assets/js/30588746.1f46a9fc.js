"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[3850],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>c});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=r,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return t?n.createElement(c,o(o({ref:a},u),{},{components:t})):n.createElement(c,o({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},444:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:10},o="Oh Shit, Perl",l={unversionedId:"tech/oh-shit-x/perl",id:"tech/oh-shit-x/perl",title:"Oh Shit, Perl",description:"You can access to this page from ohshitperl.com, ohshit.foo/perl or ohshit.bar/perl.",source:"@site/docs/0100-tech/060-oh-shit-x/010-perl.md",sourceDirName:"0100-tech/060-oh-shit-x",slug:"/tech/oh-shit-x/perl",permalink:"/tech/oh-shit-x/perl",draft:!1,editUrl:"https://github.com/ahmadalli/public-notes/edit/main/docs/0100-tech/060-oh-shit-x/010-perl.md",tags:[],version:"current",lastUpdatedBy:"ahmadali shafiee",lastUpdatedAt:1693762167,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Oh Shit, X",permalink:"/tech/oh-shit-x/"},next:{title:"Oh Shit, Python",permalink:"/tech/oh-shit-x/python"}},s={},p=[{value:"Operators",id:"operators",level:2},{value:"<code>==</code>",id:"",level:3},{value:"<code>+</code>",id:"-1",level:3},{value:"q and qq",id:"q-and-qq",level:3},{value:"&lt;=&gt;",id:"-2",level:3},{value:"=&gt; (Fat Comma) and ,=&gt; (Winking Fat Comma)",id:"-fat-comma-and--winking-fat-comma",level:3},{value:"=~",id:"-3",level:3},{value:"Precedence",id:"precedence",level:3},{value:"Secret Operators",id:"secret-operators",level:3},{value:"Arrays, Hashes, and Lists",id:"arrays-hashes-and-lists",level:2},{value:"Flow Control",id:"flow-control",level:2},{value:"Next, Last, Redo, and Continue",id:"next-last-redo-and-continue",level:3},{value:"For and Foreach",id:"for-and-foreach",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Subroutines",id:"subroutines",level:2},{value:"wantarray",id:"wantarray",level:3},{value:"Classes",id:"classes",level:2}],u={toc:p},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oh-shit-perl"},"Oh Shit, Perl"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can access to this page from ",(0,r.kt)("a",{parentName:"p",href:"https://ohshitperl.com"},"ohshitperl.com"),", ",(0,r.kt)("a",{parentName:"p",href:"https://ohshit.foo/perl"},"ohshit.foo/perl")," or ",(0,r.kt)("a",{parentName:"p",href:"https://ohshit.bar/perl"},"ohshit.bar/perl"),".")),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("p",null,"Perl has ",(0,r.kt)("a",{parentName:"p",href:"https://perldoc.perl.org/perlop"},"a lot of operators"),", and some of them are a bit weird. Here are some of them:"),(0,r.kt)("h3",{id:""},(0,r.kt)("inlineCode",{parentName:"h3"},"==")),(0,r.kt)("p",null,"These are all ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'1 == 1\n1 == 1.0\n1 == "1"\n1 == "1.0"\n1 == "a1.0aa\\n"\n"foo" == "bar"; # because why not?\n')),(0,r.kt)("p",null,"This happens because ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," is for numbers only, and strings without any numbers in them would be casted to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", and so in Perl's world ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo" == "bar"'),". For strings ",(0,r.kt)("inlineCode",{parentName:"p"},"eq")," should be used instead."),(0,r.kt)("h3",{id:"-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"+")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"+")," is for numbers which is why ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," returns int, even if the string isn't completely made of numbers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'print "123aaa" + 2; # this will return 125\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/8539065/1003464"},(0,r.kt)("icon",{icon:"fa-brands fa-stack-overflow",size:"lg"})," This is used")," to convert strings to int as well."),(0,r.kt)("h3",{id:"q-and-qq"},"q and qq"),(0,r.kt)("p",null,"You can change ",(0,r.kt)("inlineCode",{parentName:"p"},"'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," using ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"qq")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my $var = "Hello World from \\"$_\\"";\nmy $easy_var = qq\\Hello World from "$_"\\;\nmy $weird_syntax = qq qHello World from \\qq;\n')),(0,r.kt)("h3",{id:"-2"},"<=>"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<=>")," (which could be a method, like ",(0,r.kt)("inlineCode",{parentName:"p"},"CompareTo")," in C#) returns ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," based on the comparison result. It's used to compare numbers, and it's used in ",(0,r.kt)("inlineCode",{parentName:"p"},"sort")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"my @sorted = sort { $a <=> $b } @unsorted;\n")),(0,r.kt)("h3",{id:"-fat-comma-and--winking-fat-comma"},"=> (Fat Comma) and ,=> (Winking Fat Comma)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"=>"),", called fat command has similar functionality to ",(0,r.kt)("inlineCode",{parentName:"p"},",")," (comma), with additional functionality of automatically quoting the left side. It's a syntactic sugar used for hashes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"my %hash = (a => 1, b => 2, c => 3);\nmy @array = (a => b => c => d); # there's nothing special about =>, it's just a comma with left side quoting\n")),(0,r.kt)("p",null,"and if you don't want the left side to be quoted, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},",=>")," (winking fat comma)."),(0,r.kt)("h3",{id:"-3"},"=~"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"=~")," doesn't have a consistent behavior. It returns a list of matches when used with ",(0,r.kt)("inlineCode",{parentName:"p"},"m/.../")," to match the left side with the regex on the right side, but it's a binding operator when used with ",(0,r.kt)("inlineCode",{parentName:"p"},"s/.../.../")," to replace the left side with the right side."),(0,r.kt)("p",null,"Also it can be used inside a while loop to iterate over matches:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my $str = "hello world this is a test for regex in perl";\nwhile ($str =~ /(\\w+)/g) {\n  print "Word is $1, ends at position ", pos $str, "\\n";\n}\n')),(0,r.kt)("h3",{id:"precedence"},"Precedence"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://perldoc.perl.org/perlop#Operator-Precedence-and-Associativity"},"Operator Precedence and Associativity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/15193327/1003464"},(0,r.kt)("icon",{icon:"fa-brands fa-stack-overflow",size:"lg"})," Why do Perl's logical operators &&, ||, ! take precedence over and, or, and not?"))),(0,r.kt)("h3",{id:"secret-operators"},"Secret Operators"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://metacpan.org/dist/perlsecret/view/lib/perlsecret.pod"},"perlsecret - Perl secret operators and constants")),(0,r.kt)("h2",{id:"arrays-hashes-and-lists"},"Arrays, Hashes, and Lists"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lists aren't data structures, they're just a way to group values together. They would be stored in memory either as an array or a hash when assigned to a variable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can have a scalar, an array, and a hash with the same name."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my $var = "scalar";\nmy @var = ("array");\nmy %var = ("hash" => "value");\nprint "\\$var = $var\\n\\@var = @var\\n\\%var = %var\\n";\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To get values out of arrays and hashes, you need to indicate the expected output type with ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," (scalar), ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," (array), or ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," (hash) sigils prefixes, and ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," for arrays or ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," for hashes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my @array = ("a", "b", "c", "d");\nmy %hash = ("a" => 1, "b" => 2, "c" => 3);\nprint "array[0] = $array[0]\\n";\nprint "hash{a} = $hash{a}\\n";\nprint qq/hash out of array = @hash{"a", "b"}\\n/;\nprint qq/array out of hash = %array{"a", "b"}\\n/;\n')),(0,r.kt)("p",{parentName:"li"},"This can get very confusing if you reuse variable names for different types:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my @var = ("a", "b", "c", "d");\nmy %var = ("a" => 1, "b" => 2, "c" => 3);\nmy $var = "scalar";\n\nprint "\\$var{a} = $var{a}\\n"; # prints 1, returns scalar from hash\nprint "\\$var[0] = $var[0]\\n"; # prints a, returns scalar from array\nprint qq/\\@var{"a", "b"} = @var{a, b}\\n/; # prints 1 2, returns array (because of @) from hash (because of {})\nprint qq/\\%var[0,1] = %var{"a", "b"}\\n/; # prints 0 => a, 1 => b, returns hash (because of %) from array (because of [])\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"List of lists is not a 2D array, it'll be flattened into a 1D array:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my @array = (1, 2, 3, (4, 5, 6), 7, 8, 9);\nprint "@array\\n"; # prints 1 2 3 4 5 6 7 8 9\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To create a 2D array, you need to use references:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my @array = (1, 2, 3, [4, 5, 6], 7, 8, 9);\nprint "@array\\n"; # prints 1 2 3 ARRAY(0x1f9f8a0) 7 8 9\nprint "@{$array[3]}\\n"; # prints 4 5 6\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can use lists to set values of multiple variables at once:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my ($a, $b, $c) = (1, 2, 3);\nprint "$a $b $c\\n"; # prints 1 2 3\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When initializing multiple arrays using a list, the leftmost array is greedy and takes all the values:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'my (@array1, $array2) = (1, 2, 3, (4, 5, 6), 7, 8, 9);\nprint "@array1\\n"; # prints 1 2 3 4 5 6 7 8 9\nprint "$array2\\n"; # prints nothing\n')))),(0,r.kt)("h2",{id:"flow-control"},"Flow Control"),(0,r.kt)("h3",{id:"next-last-redo-and-continue"},"Next, Last, Redo, and Continue"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"last")," is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," in C# and ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," in C#. Additionally, ",(0,r.kt)("a",{parentName:"p",href:"https://perldoc.perl.org/functions/redo"},(0,r.kt)("inlineCode",{parentName:"a"},"redo"))," is used to restart the loop without reevaluating the condition and ",(0,r.kt)("a",{parentName:"p",href:"https://perldoc.perl.org/functions/continue"},(0,r.kt)("inlineCode",{parentName:"a"},"continue"))," is like ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," in exception handling, for the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," statement."),(0,r.kt)("p",null,"Take the example from perldoc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"while (EXPR) {\n    ### redo always comes here\n    do_something;\n} continue {\n    ### next always comes here\n    do_something_else;\n    # then back the top to re-check EXPR\n}\n### last always comes here\n")),(0,r.kt)("h3",{id:"for-and-foreach"},"For and Foreach"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"for")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"foreach")," are the same and can be used interchangeably."),(0,r.kt)("h3",{id:"boolean"},"Boolean"),(0,r.kt)("p",null,"Perl doesn't have a boolean type, it uses falsey and truthy values instead. The falsey values are ",(0,r.kt)("inlineCode",{parentName:"p"},"undef"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"0"'),", and empty list, array, and hash. Everything else is truthy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'print undef ? "true" : "false"; # prints false\nprint 0 ? "true" : "false"; # prints false\nprint "" ? "true" : "false"; # prints false\nprint "0" ? "true" : "false"; # prints false\nprint "false" ? "true" : "false"; # prints true\nprint "0.0" ? "true" : "false"; # prints true\nprint () ? "true" : "false"; # prints false\nmy @array = ();\nprint @array ? "true" : "false"; # prints false\nmy %hash = ();\nprint %hash ? "true" : "false"; # prints false\n')),(0,r.kt)("h2",{id:"subroutines"},"Subroutines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There's no proper way to define subroutine arguments and return. Everything that's passed to the subroutine is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"@_")," array, and you need to manually check the number of arguments and their types.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can call subroutines without parenthesis."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'sub test {\n  print $_[0] . " " . $_[1] . "\\n";\n}\n\ntest "hello", "world";\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There's no proper way to define subroutine return types as well. See ",(0,r.kt)("a",{parentName:"p",href:"#wantarray"},"wantarray")," for more oh shit moments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Variables passed to the subroutine are passed by reference and if you modify values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@_")," array, original values would be modified as well. It's a good practice to always unpack ",(0,r.kt)("inlineCode",{parentName:"p"},"@_"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"sub test1 {\n  my $arg1 = $_[0];\n}\n\nsub test2 {\n  my $arg1 = shift; # Because it's Perl, and @_ would be the unannounced argument for shift and pop: https://perldoc.perl.org/perlvar#@_\n}\n\nsub test3 {\n  my ($arg1, $arg2) = @_;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can expect a hash as the subroutine's input and create a hash from ",(0,r.kt)("inlineCode",{parentName:"p"},"@_")," on the subroutine. This approach has the benefit of copying the values, having named parameters, and being able to set default values for parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'sub test {\n  my %args = (\n    first_arg = "default value",\n    second_arg = undef,\n    @_ # use @_ as a hash and overwrite the hash values if they exist on @_\n  )\n}\n')),(0,r.kt)("p",{parentName:"li"},"But this approach doesn't support references. ",(0,r.kt)("inlineCode",{parentName:"p"},'test({ second_arg = "world" });')," doesn't work because in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"$_[0]")," would be a hash reference, and would not be unpacked into the hash. To support this case, you need to dereference the hash reference:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'sub test {\n  my %args = (\n    first_arg = "default value",\n    second_arg = undef,\n    ref($_[0]) ? %{$_[0]} : @_\n  )\n}\n')),(0,r.kt)("p",{parentName:"li"},"But note that this approach is not perfect and is error prone. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'test(first_arg=>"hello", { second_arg = "world" });')," would not unpack ",(0,r.kt)("inlineCode",{parentName:"p"},"second_arg")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"ref($_[0])")," would be false and ",(0,r.kt)("inlineCode",{parentName:"p"},"@_")," would be used instead of dereferencing the hash reference."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"To keep it simple, just use ",(0,r.kt)("inlineCode",{parentName:"strong"},"@_")," and unpack it."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can ",(0,r.kt)("a",{parentName:"p",href:"https://www.effectiveperlprogramming.com/2015/04/use-v5-20-subroutine-signatures/"},"use the experimental ",(0,r.kt)("inlineCode",{parentName:"a"},"signatures")," feature")," to define subroutine arguments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can omit ",(0,r.kt)("inlineCode",{parentName:"p"},"return <something>;")," and use ",(0,r.kt)("inlineCode",{parentName:"p"},"<something>")," instead."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'sub test {\n  return "hello";\n}\n\nsub test2 {\n  "hello"\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can omit ",(0,r.kt)("inlineCode",{parentName:"p"},"$_")," ",(0,r.kt)("a",{parentName:"p",href:"https://perldoc.perl.org/perlvar#$_"},"in some operators and functions")," to write shorter code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-perl"},"print for @array;\ngrep { m/<some regex>/ } @array;\n")),(0,r.kt)("p",{parentName:"li"},"This can also be used for bash one-liners:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"perl -ne 'print if m/<some regex>/' <file>\n")))),(0,r.kt)("h3",{id:"wantarray"},"wantarray"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wantarray")," depends on the ",(0,r.kt)("a",{parentName:"p",href:"https://perldoc.perl.org/functions/caller"},(0,r.kt)("strong",{parentName:"a"},"context"))," of the function call, meaning what you're doing with the return value of the function. If you're not doing anything with the return value, it's ",(0,r.kt)("inlineCode",{parentName:"p"},"undef"),". If you're assigning it to a scalar, it's false. If you're assigning it to a list, it's true."),(0,r.kt)("p",null,"This function creates a lot of confusion because there's no guarantee that the function is using ",(0,r.kt)("inlineCode",{parentName:"p"},"wantarray")," in its implementation, and how it's using it. Therefore it's recommended to avoid using it."),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Other than scalar, array, and hash, there are no other data structures in Perl.")),(0,r.kt)("li",{parentName:"ul"},"Object oriented programming is not built into the language, and you need to use modules to implement it. ",(0,r.kt)("a",{parentName:"li",href:"https://perldoc.perl.org/perlobj#An-Object-is-Simply-a-Data-Structure"},"An Object is Simply a Data Structure"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There's no reserved name for constructors, and you can use any name you want. ",(0,r.kt)("inlineCode",{parentName:"li"},"new")," is just a convention.")))))}m.isMDXComponent=!0}}]);