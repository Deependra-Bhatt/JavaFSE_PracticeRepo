
public class TestFactory {
     public static void main(String[] args) {
        System.out.println("\nCreating and processing a Word Document:");
        DocumentFactory wordFactory = new WordDocumentFactory();
        wordFactory.processDocument(); 

        System.out.println("\nCreating and processing a PDF Document:");
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        pdfFactory.processDocument(); 

        System.out.println("\nCreating and processing an Excel Document:");
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        excelFactory.processDocument(); 

    }

}
