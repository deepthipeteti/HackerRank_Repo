// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
            var tail=new SinglyLinkedListNode(data);
            var temp=head;
            if(head==null){
                head=tail;
            }
            else{
                while(temp.next!=null){
                    temp=temp.next;
                }
                temp.next=tail;
            }
        return head;

}