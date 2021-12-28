function postReply(commentId) {
    $('#commentId').val(commentId);
    $("#name").focus();
}
$("#submitButton").click(function () {
    $("#comment-message").css('display', 'none');
    var str = $("#frm-comment").serialize();
    $.ajax({
        url: "comment-add.php",
        data: str,
        type: 'post',
        success: function (response)
        {
            setInterval('location.reload()', 500);    
            var result = eval('(' + response + ')');
            if (response)
            {
                $("#comment-message").css('display', 'inline-block');
                $("#name").val("");
                $("#comment").val("");
                $("#commentId").val("");
                listComment();
            } else
            {
                alert("Failed to add comments !");
                return false;
            }
        }
    });
});

$(document).ready(function () {
        listComment();
});

function listComment() {
    $.post("comment-list.php",
            function (data) {
                    var data = JSON.parse(data);
                
                var comments = "";
                var replies = "";
                var item = "";
                var parent = -1;
                var results = new Array();

                var list = $("<ul class='outer-comment'>");
                var item = $("<li>").html(comments);

                for (var i = 0; (i < data.length); i++)
                {
                    var commentId = data[i]['comment_id'];
                    parent = data[i]['parent_comment_id'];

                    if (parent == "0")
                    {
                        
                        comments =  "<div class='row '>"+
                                    "<div class='col-2'>"+
                                    " <img src='https://ui-avatars.com/api/?name="+data[i]['comment_sender_name']+"& background=random' class='icon-review'/>"+
                                    " </div>"+
                                    " <div class='col card-list'>"+
                                    "<div class='' >"+
                                    "<div class='card-one'>"+
                                    "<div class='comment-row'>"+
                                    "<div class='comment-info'><span class='commet-row-label'>from</span> <span class='posted-by'>" + data[i]['comment_sender_name'] + " </span> <span class='commet-row-label'>at</span> <span class='posted-at'>" + data[i]['date'] + "</span></div>" + 
                                    "<div class='comment-text'>" + data[i]['comment'] + "</div>"+
                                    "<div><a class='btn-reply reply' href='#popupLogin' data-rel='popup' data-position-to='window'   data-transition='pop' onClick='postReply(" + commentId + ")'> <dic><i class='fa-solid fa-reply icon'></i> &nbsp; Reply</dic></a></div>"+
                                    
                                    "</div>"+
                                    "</div>"+
                                    "</div>"+
                                    "</div>"+
                                    "</div>";



                        var item = $("<li>").html(comments);
                        list.append(item);
                        var reply_list = $('<ul>');
                        item.append(reply_list);
                        listReplies(commentId, data, reply_list);
                    }
                }
                $("#output").html(list);
            });
}
            function listReplies(commentId, data, list) {
                for (var i = 0; (i < data.length); i++)
                {
                    if (commentId == data[i].parent_comment_id)
                    {
                        var comments =      "<div class='row '>"+
                                            "<div class='col-2'>"+
                                            " <img src='https://ui-avatars.com/api/?name="+data[i]['comment_sender_name']+"& background=random' class='icon-review'/>"+
                                            " </div>"+
                                            " <div class='col card-list'>"+
                                            "<div class='' >"+
                                            "<div class='card-one'>"+
                                            "<div class='comment-row'>"+
                                            " <div class='comment-info'><span class='commet-row-label'>from</span> <span class='posted-by'>" + data[i]['comment_sender_name'] + " </span> <span class='commet-row-label'>at</span> <span class='posted-at'>" + data[i]['date'] + "</span></div>" + 
                                            "<div class='comment-text'>" + data[i]['comment'] + "</div>"+
                                            "<div><a class='btn-reply reply2 icon-reply2' href='#popupLogin' data-rel='popup' data-position-to='window'   data-transition='pop' onClick='postReply(" + data[i]['comment_id'] + ")'><dic><i class='fa-solid fa-reply icon2'></i> &nbsp; Reply</dic></a></div>"+
                                            "</div>"+
                                            "</div>"+
                                            "</div>"+
                                            "</div>"+
                                            "</div>";
            
            var item = $("<li>").html(comments);
            var reply_list = $('<ul>');
            list.append(item);
            item.append(reply_list);
            listReplies(data[i].comment_id, data, reply_list);
        }
    }
}


                            

