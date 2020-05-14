$(document).ready(function () {
    $("form").on("submit", function () {
        var item = $("form input");
        var todo = { item: item.val(), completed: false };

        $.ajax({
            type: "POST",
            url: "/todo",
            data: todo,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            },
        });

        return false;
    });
    var todoListItem = $(".todo-list");
    todoListItem.on("click", ".remove", function () {
        //var item = $(this).text().replace(/ /g, "-");
        var item = $(this).parent().text().trim();
        $.ajax({
            type: "DELETE",
            url: "/todo/" + item,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            },
        });
    });

    todoListItem.on("change", ".checkbox", function () {
        var value = $(this).val();
        var action;
        //alert($("input:checkbox[name=todoItem]:checked").val());
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
            action = false;
        } else {
            $(this).attr("checked", "checked");
            action = true;
        }

        $.ajax({
            type: "PUT",
            url: "/todo/completed/" + value + "/" + action,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            },
        });

        //$(this).closest("li").toggleClass("completed");
    });
});
