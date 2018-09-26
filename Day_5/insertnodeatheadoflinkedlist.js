// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    var temp=new SinglyLinkedListNode(data);
            if(head==null)
                head=temp;
            else{
               temp.next=head; 
            }
        return temp;

}