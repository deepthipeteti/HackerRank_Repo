// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
    var i=0;
        var arr=new Array(1000);
        var temp=head;
        while(temp!=null){
            arr[i]=temp.data;
            temp=temp.next;
            i++;
        }
        return arr[i-1-positionFromTail];

}