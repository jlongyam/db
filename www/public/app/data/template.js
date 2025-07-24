template = {};
template['Include'] = {
  top:  eol(function() {/*
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="content-type" content="text/html" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>TITLE</title>
  */}),
  middle: eol(function() {/*
    </head>
    <body>
  */}),
  bottom: eol(function() {/*
    </body>
    </html>
  */}),
  'css': function( s ) {
    return '<style type="text/css">' + s + '</style>'
  },
  'js': function( s ) {
    return '<script type="text/javascript">' + s + '</script>'
  }
};
template['Result Image'] = {
  initial: {
    title: 'Image',
    src: 'capture/SampleJPGImage_50kbmb.jpg'
  },
  view: eol(function() {/*
    <figure>
      <figcaption>{% this.title %}</figcaption>
      <div class="grid _center wg_img_container">
        <img class="local_src" src="{% this.src %}" />
      </div>
    </figure>
  */})
};
template['Result Iframe'] = {
  initial: {
    title: 'Iframe',
    src: 'capture/SampleIframeTarget.html'
  },
  view: eol(function() {/*
    <figure>
      <figcaption>{% this.title %}</figcaption>
      <div class="wg_iframe_container">
        <iframe class="local_src" src="{% this.src %}"></iframe>
      </div>
    </figure>
  */})
};
template['Source'] = {
  initial: {
    title: '',
    source: {
      id: 'src',
      lang: 'markup',
      content: 'SOURCE'
    }
  },
  view: eol(function() {/*
    <figure>
      <figcaption>{% this.title %}</figcaption>
      <pre id="content_{% this.source.id %}">
        <code class="language-{% this.source.lang %}">{% this.source.content %}</code>
      </pre>
      <div class="figure_control_area">
        <span class="copy_info hide">Copied ..</span>
        <button class="button _raised _copy_action" onclick="copyToClipboard( content_{% this.source.id %}.textContent )">copy</button>
      </div>
    </figure>
  */})
};
template['Console'] = {
  initial: {
    title: '',
    result: {
      lang: 'bash',
      content: '$ echo text\ntext\n'
    }
  },
  view: eol(function() {/*
    <figure class="wg_console">
      <figcaption class="wg_console_title">{% this.title %}</figcaption>
      <pre class="wg_console_content">
        <code class="language-{% this.result.lang %}">{% this.result.content %}</code>
      </pre>
    </figure>
  */})
};
template['Sources Accordion'] = {
  initial: {
    id: 'SA',
    content: [{
      title: 'TITLE_1',
      lang: 'java',
      source: 'CONTENT_1'
    }, {
      title: 'TITLE_2',
      lang: 'xml',
      source: 'CONTENT_2'
    }]
  },
  view: eol(function() {/*
    <div class="accordion__set wg_accordion_prism">
      {% for( var i = 0; i < this.content.length; i++ ) { %}
      <details class="accordion"{% if(i == 0) {%} open{%}%}>
        <summary class="accordion__title">{% this.content[i].title %}</summary>
        <div class="accordion__content">
          <pre id="content_{% this.id %}_{% i %}">
            <code class="language-{% this.content[i].lang %}">{% this.content[i].source %}</code>
          </pre>
          <div class="accordion_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( content_{% this.id %}_{% i %}.textContent )">copy</button>
          </div>
        </div>
      </details>
      {% } %}
    </div>
  */})
};
template['Sources Tab'] = {
  initial: {
    id: 'ST',
    content: [{
      title: 'TITLE_1',
      lang: 'java',
      source: 'CONTENT_1'
    }, {
      title: 'TITLE_2',
      lang: 'xml',
      source: 'CONTENT_2'
    }]
  },
  view: eol(function() {/*
    <div class="tab wg_tab_prism">
      <div class="tab-head">
        {% for( var i = 0; i < this.content.length; i++ ) { %}
        <div class="tab-head-item{% if(i == 0) {%} active{%}%}"><label for="tab_{% this.id %}_{% i %}">{% this.content[i].title %}</label></div>
        {% } %}
      </div>
      <div class="tab-body">
        {% for( var i = 0; i < this.content.length; i++ ) { %}
        <input class="tab-body-item-switch" type="radio" name="tab_{% this.id %}" id="tab_{% this.id %}_{% i %}"{% if(i == 0) {%} checked{%}%} />
        <div class="tab-body-item">
          <pre id="content_{% this.id %}_{% i %}">
            <code class="language-{% this.content[i].lang %}">{% this.content[i].source %}</code>
          </pre>
          <div class="tab_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( content_{% this.id %}_{% i %}.textContent )">copy</button>
          </div>
        </div>
        {% } %}
      </div>
    </div>
  */})
};
template['Sources Accordion Result Image'] = {
  initial: {
    id: 'SARI',
    content: [{
      title: 'TITLE_1',
      lang: 'java',
      source: 'CONTENT_1'
    }, {
      title: 'TITLE_2',
      lang: 'xml',
      source: 'CONTENT_2'
    }],
    result: {
      title: 'Image',
      src: 'capture/SampleJPGImage_50kbmb.jpg'
    }
  },
  view: eol(function() {/*
    <div class="accordion__set wg_accordion_prism">
      {% for( var i = 0; i < this.content.length; i++ ) { %}
      <details class="accordion"{% if(i == 0) {%} open{%}%}>
        <summary class="accordion__title">{% this.content[i].title %}</summary>
        <div class="accordion__content">
          <pre id="content_{% this.id %}_{% i %}">
            <code class="language-{% this.content[i].lang %}">{% this.content[i].source %}</code>
          </pre>
          <div class="accordion_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( content_{% this.id %}_{% i %}.textContent )">copy</button>
          </div>
        </div>
      </details>
      {% } %}
      <details class="accordion">
        <summary class="accordion__title">{% this.result.title %}</summary>
        <div class="grid _center wg_img_container">
          <img class="local_src" src="{% this.result.src %}" />
        </div>
      </details>
    </div>
  */})
};
template['Sources Accordion Result Iframe'] = {
  initial: {
    id: 'SARI',
    content: [{
      title: 'TITLE_1',
      lang: 'java',
      source: 'CONTENT_1'
    }, {
      title: 'TITLE_2',
      lang: 'xml',
      source: 'CONTENT_2'
    }],
    result: {
      title: 'Iframe',
      src: 'capture/SampleIframeTarget.html'
    }
  },
  view: eol(function() {/*
    <div class="accordion__set wg_accordion_prism">
      {% for( var i = 0; i < this.content.length; i++ ) { %}
      <details class="accordion"{% if(i == 0) {%} open{%}%}>
        <summary class="accordion__title">{% this.content[i].title %}</summary>
        <div class="accordion__content">
          <pre id="content_{% this.id %}_{% i %}">
            <code class="language-{% this.content[i].lang %}">{% this.content[i].source %}</code>
          </pre>
          <div class="accordion_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( content_{% this.id %}_{% i %}.textContent )">copy</button>
          </div>
        </div>
      </details>
      {% } %}
      <details class="accordion">
        <summary class="accordion__title">{% this.result.title %}</summary>
        <div class="wg_iframe_container">
          <iframe class="local_src" src="{% this.result.src %}"></iframe>
        </div>
      </details>
    </div>
  */})
};
template['Sources Accordion Result Video'] = {
  initial: {
    id: 'SARI',
    content: [{
      title: 'TITLE_1',
      lang: 'java',
      source: 'CONTENT_1'
    }, {
      title: 'TITLE_2',
      lang: 'xml',
      source: 'CONTENT_2'
    }],
    result: {
      title: 'Video',
      src: 'capture/SampleJPGImage_50kbmb.jpg'
    }
  },
  view: eol(function() {/*
    <div class="accordion__set wg_accordion_prism">
    {% for( var i = 0; i < this.content.length; i++ ) { %}
    <details class="accordion"{% if(i == 0) {%} open{%}%}>
      <summary class="accordion__title">{% this.content[i].title %}</summary>
      <div class="accordion__content">
        <pre id="content_{% this.id %}_{% i %}">
          <code class="language-{% this.content[i].lang %}">{% this.content[i].source %}</code>
        </pre>
        <div class="accordion_control_area">
          <span class="copy_info hide">Copied ..</span>
          <button class="button _raised _copy_action" onclick="copyToClipboard( content_{% this.id %}_{% i %}.textContent )">copy</button>
        </div>
      </div>
    </details>
    {% } %}
    <details class="accordion">
      <summary class="accordion__title">{% this.result.title %}</summary>
      <video controls>
        <source class="local_src" src="capture/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
      </video>
    </details>
    </div>
  */})
};
template['Console App Accordion'] = {
  initial: {
    id: 'CA',
    content: [{
      title: 'TITLE_1',
      lang: 'java',
      source: 'CONTENT_1'
    }, {
      title: 'TITLE_2',
      lang: 'xml',
      source: 'CONTENT_2'
    }],
    result: {
      lang: 'bash',
      content: 'RESULT'
    }
  },
  view: eol(function() {/*
    <div class="accordion__set wg_accordion_prism">
      {% for( var i = 0; i < this.content.length; i++ ) { %}
      <details class="accordion"{% if(i == 0) {%} open{%}%}>
        <summary class="accordion__title">{% this.content[i].title %}</summary>
        <div class="accordion__content">
          <pre id="content_{% this.id %}_{% i %}">
            <code class="language-{% this.content[i].lang %}">{% this.content[i].source %}</code>
          </pre>
          <div class="accordion_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( content_{% this.id %}_{% i %}.textContent )">copy</button>
          </div>
        </div>
      </details>
      {% } %}
      <details class="accordion">
        <summary class="accordion__title">Result</summary>
        <div class="accordion__content">
          <pre class="wg_console_content">
            <code class="language-{% this.result.lang %}">{% this.result.content %}</code>
          </pre>
        </div>
      </details>
    </div>
  */})
};
template['Console App Tab'] = {
  initial: {
    id: 'CT',
    content: [{
      title: 'TITLE_1',
      lang: 'java',
      source: 'CONTENT_1'
    }, {
      title: 'TITLE_2',
      lang: 'xml',
      source: 'CONTENT_2'
    }],
    result: {
      lang: 'bash',
      content: 'RESULT'
    }
  },
  view: eol(function() {/*
    <div class="tab wg_tab_prism">
      <div class="tab-head">
        {% for( var i = 0; i < this.content.length; i++ ) { %}
        <div class="tab-head-item{% if(i == 0) {%} active{%}%}"><label for="tab_{% this.id %}_{% i %}">{% this.content[i].title %}</label></div>
        {% } %}
        <div class="tab-head-item"><label for="tab_{% this.id %}_result">Result</label></div>
      </div>
      <div class="tab-body">
        {% for( var i = 0; i < this.content.length; i++ ) { %}
        <input class="tab-body-item-switch" type="radio" name="tab_{% this.id %}" id="tab_{% this.id %}_{% i %}"{% if(i == 0) {%} checked{%}%} />
        <div class="tab-body-item">
          <pre id="content_{% this.id %}_{% i %}">
            <code class="language-{% this.content[i].lang %}">{% this.content[i].source %}</code>
          </pre>
          <div class="tab_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( content_{% this.id %}_{% i %}.textContent )">copy</button>
          </div>
        </div>
        {% } %}
        <input class="tab-body-item-switch" type="radio" name="tab_{% this.id %}" id="tab_{% this.id %}_result" />
        <div class="tab-body-item">
          <pre class="wg_console_content">
            <code class="language-{% this.result.lang %}">{% this.result.content %}</code>
          </pre>
        </div>
      </div>
    </div>
  */})
};
template['Preview Tab'] = {
  initial: {
    id: 'PT1',
    in_iframe: true,
    in_div: true,
    in_window: true,
    source: '&lt;h5&gt;Heading 5&lt;/h5&gt;'
  },
  view: eol(function() {/*
    <div class="tab wg_tab_preview">
      <div class="tab-head">
        <div class="tab-head-item active"><label for="tab_preview_{% this.id %}_source">Source</label></div>
        {% if( this.in_iframe ) { %}
        <div class="tab-head-item" onclick="preview( ta_preview_{% this.id %}.value ).in_frame( 'ifr_preview_{% this.id %}' )"><label for="tab_preview_{% this.id %}_iframe">Result</label></div>
        {% } %}
        {% if( this.in_div ) { %}
        <div class="tab-head-item" onclick="preview( ta_preview_{% this.id %}.value ).in_element( div_preview_{% this.id %} )"><label for="tab_preview_{% this.id %}_div">Test</label></div>\
        {% } %}
        {% if( this.in_window ) { %}
        <div class="tab-head-item" onclick="preview( ta_preview_{% this.id %}.value ).in_window()"><label>Open</label></div>
        {% } %}
      </div>
      <div class="tab-body">
        <input class="tab-body-item-switch" type="radio" name="tab_preview_{% this.id %}" id="tab_preview_{% this.id %}_source" checked />
        <div class="tab-body-item">
          <div class="tab_source_area">
            <div class="ta-edit">
              <div class="ta-box">
                <textarea class="ta-box__area" id="ta_preview_{% this.id %}" data-lang="html">
                  {% this.source %}
                </textarea>
              </div>
            </div>
          </div>
          <div class="tab_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( ta_preview_{% this.id %}.value )">copy</button>
          </div>
        </div>
        {% if( this.in_iframe ) { %}
        <input class="tab-body-item-switch" type="radio" name="tab_preview_{% this.id %}" id="tab_preview_{% this.id %}_iframe" />
        <div class="tab-body-item">
          <iframe id="ifr_preview_{% this.id %}" class="wg_tab_preview_result_iframe"></iframe>
        </div>
        {% } %}
        {% if( this.in_div ) { %}
        <input class="tab-body-item-switch" type="radio" name="tab_preview_{% this.id %}" id="tab_preview_{% this.id %}_div" />
        <div class="tab-body-item">
          <div id="div_preview_{% this.id %}" class="wg_tab_preview_result_div"></div>
        </div>
        {% } %}
      </div>
    </div>
  */})
};
template['Previews Tab'] = {
  initial: {
    id: 'PTM',
    in_iframe: true,
    in_div: true,
    in_window: true,
    content: [{
      lang: 'html',
      source: '<div id="foo"><b id="bar">Text</b></div>'
    }, {
      lang: 'css',
      source: '#foo { padding: 5px }'
    }, {
      lang: 'js',
      source: 'bar.textContent = "Bold"'
    }]
  },
  view: eol(function() {/*
    <div class="tab wg_tab_preview">
      <div class="tab-head">
        {% for( var i = 0; i < this.content.length; i++ ) { %}
        <div class="tab-head-item{% if(i == 0) {%} active{%}%}">
          <label for="tabs_preview_{% this.id %}_{% i %}">{% this.content[i].lang.toUpperCase() %}</label>
        </div>
        {% } %}
        <!-- -->
        {% if( this.in_iframe ) { %}
        <div class="tab-head-item"
          onclick="preview([
            template['Include'].top,
            template['Include']['css']( ta_previews_{% this.id %}_1.value ),
            template['Include'].middle,
            ta_previews_{% this.id %}_0.value,
            template['Include']['js']( ta_previews_{% this.id %}_2.value ),
            template['Include'].bottom
            ]).in_frame('ifr_preview_{% this.id %}')">
          <label for="tabs_preview_{% this.id %}_iframe">Result</label></div>
        {% } %}
        {% if( this.in_div ) { %}
        <div class="tab-head-item"
          onclick="preview([
            template['Include']['css']( ta_previews_{% this.id %}_1.value ),
            ta_previews_{% this.id %}_0.value
            ]).in_element( div_preview_{% this.id %} );
            eval( ta_previews_{% this.id %}_2.value )">
          <label for="tabs_preview_{% this.id %}_div">Test</label></div>\
        {% } %}
        {% if( this.in_window ) { %}
        <div class="tab-head-item"
          onclick="preview([
            template['Include'].top,
            template['Include']['css']( ta_previews_{% this.id %}_1.value ),
            template['Include'].middle,
            ta_previews_{% this.id %}_0.value,
            template['Include']['js']( ta_previews_{% this.id %}_2.value ),
            template['Include'].bottom
            ]).in_window()">
          <label>Open</label></div>
        {% } %}
      </div>
      <div class="tab-body">
        {% for( var i = 0; i < this.content.length; i++ ) { %}
        <input class="tab-body-item-switch" type="radio" name="tabs_preview_{% this.id %}" id="tabs_preview_{% this.id %}_{% i %}"{% if(i == 0) {%} checked{%}%} />
        <div class="tab-body-item">
          <div class="tab_source_area">
            <div class="ta-edit">
              <div class="ta-box">
                <textarea class="ta-box__area" id="ta_previews_{% this.id %}_{% i %}" data-lang="{% this.content[i].lang %}">
                  {% this.content[i].source %}
                </textarea>
              </div>
            </div>
          </div>
          <div class="tab_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( ta_previews_{% this.id %}_{% i %}.value )">copy</button>
          </div>
        </div>
        {% } %}
        <!-- -->
        {% if( this.in_iframe ) { %}
        <input class="tab-body-item-switch" type="radio" name="tabs_preview_{% this.id %}" id="tabs_preview_{% this.id %}_iframe" />
        <div class="tab-body-item">
          <iframe id="ifr_preview_{% this.id %}" class="wg_tab_preview_result_iframe"></iframe>
        </div>
        {% } %}
        {% if( this.in_div ) { %}
        <input class="tab-body-item-switch" type="radio" name="tabs_preview_{% this.id %}" id="tabs_preview_{% this.id %}_div" />
        <div class="tab-body-item">
          <div id="div_preview_{% this.id %}" class="wg_tab_preview_result_div"></div>
        </div>
        {% } %}
      </div>
    </div>
  */})
};
template['Preview Accordion'] = {
  initial: {
    id: 'PA1',
    in_iframe: true,
    in_div: true,
    in_window: true,
    source: '&lt;h5&gt;Heading 5&lt;/h5&gt;'
  },
  view: eol(function() {/*
    <div class="accordion__set wg_accordion_prism">
      <details class="accordion" open>
        <summary class="accordion__title">Source</summary>
        <div class="accordion__content">
          <div class="ta-edit wg_accordion_preview_source">
            <div class="ta-box">
              <textarea class="ta-box__area" id="ta_preview_{% this.id %}" data-lang="html">
                {% this.source %}
              </textarea>
            </div>
          </div>
          <div class="accordion_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( ta_preview_{% this.id %}.value )">copy</button>
          </div>
      </details>
      <!-- -->
      {% if( this.in_iframe ) { %}
      <details class="accordion">
        <summary class="accordion__title" onclick="preview( ta_preview_{% this.id %}.value ).in_frame('ifr_preview_{% this.id %}')">Result</summary>
        <div class="accordion__content">
          <div class="wg_iframe_container">
            <iframe class="wg_accordion_preview_result_iframe" id="ifr_preview_{% this.id %}"></iframe>
          </div>
          {% if( this.in_window ) { %}
          <div class="accordion_control_area">
            <button class="button _raised" onclick="preview( ta_preview_{% this.id %}.value ).in_window()">Open</button>
          </div>
          {% } %}
        </div>
      </details>
      {% } %}
      {% if( this.in_div ) { %}
      <details class="accordion">
        <summary class="accordion__title" onclick="preview( ta_preview_{% this.id %}.value ).in_element( div_preview_{% this.id %} )">Test</summary>
        <div class="accordion__content">
          <div id="div_preview_{% this.id %}" class="wg_accordion_preview_result_div"></div>
        </div>
      </details>
      {% } %}
    </div>
  */})
};
template['Previews Accordion'] = {
  initial: {
    id: 'PAM',
    in_iframe: true,
    in_div: true,
    in_window: true,
    content: [{
      lang: 'html',
      source: '<div id="foo"><b id="bar">Text</b></div>'
    }, {
      lang: 'css',
      source: '#foo { padding: 5px }'
    }, {
      lang: 'js',
      source: 'bar.textContent = "Bold"'
    }]
  },
  view: eol(function() {/*
    <div class="accordion__set wg_accordion_prism">
      {% for( var i = 0; i < this.content.length; i++ ) { %}
      <details class="accordion"{% if(i == 0) {%} open{%}%}>
        <summary class="accordion__title">{% this.content[i].lang.toUpperCase() %}</summary>
        <div class="accordion__content">
          <div class="ta-edit wg_accordion_preview_source">
            <div class="ta-box">
              <textarea class="ta-box__area" id="ta_previews_{% this.id %}_{% i %}" data-lang="{% this.content[i].lang %}">
                {% this.content[i].source %}
              </textarea>
            </div>
          </div>
          <div class="accordion_control_area">
            <span class="copy_info hide">Copied ..</span>
            <button class="button _raised _copy_action" onclick="copyToClipboard( ta_previews_{% this.id %}_{% i %}.value )">copy</button>
          </div>
        </div>
      </details>
      {% } %}
      <!-- -->
      {% if( this.in_iframe ) { %}
      <details class="accordion">
        <summary class="accordion__title"
          onclick="preview([
            template['Include'].top,
            template['Include']['css']( ta_previews_{% this.id %}_1.value ),
            template['Include'].middle,
            ta_previews_{% this.id %}_0.value,
            template['Include']['js']( ta_previews_{% this.id %}_2.value ),
            template['Include'].bottom
            ]).in_frame('ifr_preview_{% this.id %}')">Result</summary>
        <div class="accordion__content">
          <div class="wg_iframe_container">
            <iframe class="wg_accordion_preview_result_iframe" id="ifr_preview_{% this.id %}"></iframe>
          </div>
          {% if( this.in_window ) { %}
          <div class="accordion_control_area">
            <button class="button _raised"
              onclick="preview([
                template['Include'].top,
                template['Include']['css']( ta_previews_{% this.id %}_1.value ),
                template['Include'].middle,
                ta_previews_{% this.id %}_0.value,
                template['Include']['js']( ta_previews_{% this.id %}_2.value ),
                template['Include'].bottom
                ]).in_window()">Open</button>
          </div>
          {% } %}
        </div>
      </details>
      {% } %}
      {% if( this.in_div ) { %}
      <details class="accordion">
        <summary class="accordion__title"
          onclick="preview([
            template['Include']['css']( ta_previews_{% this.id %}_1.value ),
            ta_previews_{% this.id %}_0.value
            ]).in_element( div_preview_{% this.id %} );
            eval( ta_previews_{% this.id %}_2.value )">Test</summary>
        <div class="accordion__content">
          <div id="div_preview_{% this.id %}" class="wg_accordion_preview_result_div"></div>
        </div>
      </details>
      {% } %}
    </div>
  */})
};
