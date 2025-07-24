//
content = [
  eol(function() {/*
    $ git <mark>status</mark>
    On branch master
    Your branch is up to date with 'origin/master'.

    Changes not staged for commit:
      (use "git add &lt;file&gt;..." to update what will be committed)
      (use "git checkout -- &lt;file&gt;..." to discard changes in working directory)

            modified:   data/meta.js
            modified:   index.html

    Untracked files:
      (use "git add &lt;file&gt;..." to include in what will be committed)

            .sys/tool/eol.min.js
            .sys/tool/lorem.min.js
            data/2019/01/25/

    no changes added to commit (use "git add" and/or "git commit -a")
  */}),
  eol(function(){/*
    <figure class="wg_console">
      <figcaption class="wg_console_title"></figcaption>
      <pre id="content_0" class="wg_console_content">
        <code class="language-{% this.lang %}">{% this.content %}</code>
      </pre>
    </figure>
  */}),
  eol(function() {/*
    <section>
      <h5>Lorem {% this.lorem_type %}</h5>
      <p>{% this.lorem_content %}</p>
    </section>
  */})
];
detail.content = [
  '<h3>git content</h3>' + TPL( content[1], { content: content[0], lang: 'git' } ),
  '<h3>Random String</h3>'
  + TPL( content[2], { lorem_type: 'word 20', lorem_content: lorem.word( 20 ) } )
  + TPL( content[2], { lorem_type: 'sentence 5', lorem_content: lorem.sentence( 5 ) } )
  + TPL( content[2], { lorem_type: 'markup xml 5', lorem_content:  TPL( content[1], { content: lorem.markup( 5 ), lang: 'xml' } ) } ),
  '<strong>Note</strong>: for good result, use space rather than tab.'
]