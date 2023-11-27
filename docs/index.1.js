
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 Color Manipulator</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/theme/theme.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/color-manipulator/color-manipulator.js\"></script>\n    <script src=\"lib/color-manipulator/color-calculator-parser.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>Playground for <a href=\"https://github.com/allnulled/color-manipulator\"><code>color-manipulator</code></a></h5>"
 + "    <div style=\"padding: 4px;\">"
 + "      <div class=\"window active\">"
 + "        <div class=\"title-bar\">"
 + "          <div class=\"title-bar-text\">Color calculator UI</div>"
 + "        </div>"
 + "        <div class=\"window-body\">"
 + "          <div class=\"lista_de_colores\">"
 + "            <ul>"
 + "              <li>"
 + "                <table style=\"width:100%;\">"
 + "                  <tbody v-for=\"color, color_index in lista_de_colores\" v-bind:key=\"'color-' + color_index\">"
 + "                    <tr>"
 + "                      <td style=\"width:100%;\">"
 + "                        <div class=\"recuadro_de_color\">"
 + "                          <div :style=\"'background-color:' + color.toRGB()\" v-on:click=\"() => al_clicar_en_color(color_index)\"></div>"
 + "                        </div>"
 + "                        <input type=\"color\" style=\"display:none;\" :ref=\"'color_picker_' + color_index\" v-on:change=\"evento => al_escoger_color(color_index, evento)\" />"
 + "                      </td>"
 + "                      <td style=\"width:1%;border:1px solid #CCC; border-radius: 3pt;\">"
 + "                        {{ color.toHexadecimal() }}"
 + "                      </td>"
 + "                      <td style=\"width:1%;border:1px solid #CCC; border-radius: 3pt;\">"
 + "                        {{ color.toRGB() }}"
 + "                      </td>"
 + "                      <td style=\"width:1%;\">"
 + "                        <button style=\"min-width:40px;\" v-on:click=\"() => eliminar_color(color_index)\">✖</button>"
 + "                      </td>"
 + "                    </tr>"
 + "                    <tr>"
 + "                      <td style=\"width:100%;\" colspan=\"100\">"
 + "                        <input style=\"width:100%;\" type=\"text\" v-model=\"lista_de_expresiones[color_index]\" v-on:input=\"evento => al_cambiar_expresion_de_color(color_index, evento)\" />"
 + "                      </td>"
 + "                    </tr>"
 + "                  </tbody>"
 + "                </table>"
 + "              </li>"
 + "              <li>"
 + "                <button style=\"width:100%;\" v-on:click=\"agregar_color\">➕ Add color</button>"
 + "              </li>"
 + "            </ul>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { lista_de_expresiones:[ "#000000 + 127" ],
lista_de_colores:[ ColorManipulator.Color.calculate( "#000000 + 127" ) ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ agregar_color() {try {
this.lista_de_colores.push( ColorManipulator.Color.create( "#000000" ) );
this.lista_de_expresiones.push( "#000000" );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_color( color_index ) {try {
clearTimeout( this.postponedor_id );
this.lista_de_colores.splice( color_index,
1 );
this.lista_de_expresiones.splice( color_index,
1 );
} catch(error) {
console.log(error);
throw error;
}

},
al_cambiar_expresion_de_color( color_index,
evento ) {try {
console.log(color_index);
console.log(evento.target.value);
clearTimeout( this.postponedor_id );
this.postponedor_id = setTimeout( () => {try {
const nuevo_color = ColorManipulator.Color.calculate( evento.target.value );
console.log(nuevo_color);
this.lista_de_colores[ color_index ] = nuevo_color;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 0.5 );
} catch(error) {
console.log(error);
throw error;
}

},
al_clicar_en_color( color_index ) {try {
this.$refs[ "color_picker_" + color_index ][ 0 ].click(  );
} catch(error) {
console.log(error);
throw error;
}

},
al_escoger_color( color_index,
evento ) {try {
this.lista_de_colores[ color_index ] = ColorManipulator.Color.create( evento.target.value );
this.lista_de_expresiones[ color_index ] = evento.target.value.toUpperCase(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");