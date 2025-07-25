detail.data = {
  result: {
    id: 'JCA',
    content: [{
      title: 'Main.java',
      lang: 'java',
      source: eol(function() {/*
        import java.io.File;
        import java.io.IOException;

        public class Main {
          public static void main( String[] args ) {
            try {
              File file = new File( "Result.txt" );
              if( <mark>file.createNewFile()</mark> )
                System.out.println( "File Result.txt created success" );
              else
                System.out.println( "Create new file failed" );
            }
            catch( IOException ioe ) {
              ioe.printStackTrace();
            }
          }
        }
        // Note: Result file content is empty
      */})
    }],
    result: {
      lang: 'bash',
      content: eol(function() {/*
        javac Main.java
        java <mark>Main</mark>
        File Result.txt created success
      */})
    }
  }
};
detail.content = [
  '<h3>Create New File</h3>' + TPL( template['Console App Accordion'].view, detail.data.result ),
  eol(function() {/*
    <h3>Result View</h3>
    <ul class="tree">
      <li>Project Dir
        <ul>
          <li>Main.java</li>
          <li>Main.class</li>
          <li>Result.txt</li>
        </ul>
      </li>
    </ul>
  */})
];