// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
        var temp=head;
        var previous=null,nextnode;
        while(temp!=null){
            nextnode=temp.next;
            temp.next=previous;
             previous = temp; 
            temp= nextnode; 
        }
        return previous;

}