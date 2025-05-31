
// import java.util.Scanner;

// public class EncryptDecrypt {

//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);

//         // Input the message
//         System.out.println("Enter a message:");
//         String inputMessage = scanner.nextLine();

//         // Encrypt the message
//         String encryptedMessage = encryptMessage(inputMessage);
//         System.out.println("Encrypted Message: " + encryptedMessage);

//         // Decrypt the message
//         String decryptedMessage = decryptMessage(encryptedMessage);
//         System.out.println("Decrypted Message: " + decryptedMessage);

//         scanner.close();
//     }

//     // Encrypt the message
//     private static String encryptMessagtring message) {
//         StringBuilder encrypted = new StringBuilder();

//         for (int i = 0; i < message.length(); i++) {
//             char ch = message.charAt(i);
//             int charValue;

//             if (Character.isUpperCase(ch)) {
//                 charValue = ch - 'A'; // Convert A-Z to 0-25
//             } else if (Character.isLowerCase(ch)) {
//                 charValue = ch; // Use ASCII value for lowercase letters
//             } else {
//                 charValue = ch; // Use ASCII value for other characters
//             }

//             int encryptedValue;
//             if (i % 2 == 0) { // Even index
//                 encryptedValue = (charValue * 2) + 26;
//             } else { // Odd index
//                 encryptedValue = (charValue * 3) + 26;
//             }

//             encrypted.append((char) encryptedValue);
//         }
//         return encrypted.toString();
//     }

//     // Decrypt the message
//     private static String decryptMessage(String encryptedMessage) {
//         StringBuilder decrypted = new StringBuilder();

//         for (int i = 0; i < encryptedMessage.length(); i++) {
//             char ch = encryptedMessage.charAt(i);
//             int encryptedValue = ch;
//             int charValue;

//             if (i % 2 == 0) { // Even index
//                 charValue = (encryptedValue - 26) / 2;
//             } else { // Odd index
//                 charValue = (encryptedValue - 26) / 3;
//             }

//             if (charValue >= 0 && charValue <= 25) {
//                 decrypted.append((char) ('A' + charValue)); // Convert back to A-Z
//             } else {
//                 decrypted.append((char) charValue); // Keep ASCII value for lowercase and others
//             }
//         }
//         return decrypted.toString();
//     }

//     public static String getEncryptMessagtring() {
//         return encryptMessagtring;
//     }

//     public static void setEncryptMessagtring(String encryptMessagtring) {
//         EncryptDecrypt.encryptMessagtring = encryptMessagtring;
//     }
// } 

public class EncryptDecrypt {
    public static void main(String[] args) {
        System.out.println("p");
    }
}