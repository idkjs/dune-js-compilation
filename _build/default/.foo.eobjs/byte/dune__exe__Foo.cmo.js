(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_hello_from_js=caml_string_of_jsbytes("hello from js"),
     Stdlib=global_data.Stdlib;
    caml_call1(Stdlib[46],cst_hello_from_js);
    var Dune_exe_Foo=[0];
    runtime.caml_register_global(2,Dune_exe_Foo,"Dune__exe__Foo");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZm9vLmVvYmpzL2J5dGUvZHVuZV9fZXhlX19Gb28uY21vLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVm9sdW1lcy9TU0QvR2l0aHViL2hlbGxvX2Zyb21fanMvX2J1aWxkL2RlZmF1bHQvZm9vLnJlIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7SUFBQTs7O1UiLCJzb3VyY2VzQ29udGVudCI6WyJwcmludF9lbmRsaW5lKFwiaGVsbG8gZnJvbSBqc1wiKVxuIl19
