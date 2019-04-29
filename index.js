function createPost() {

  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  let title = document.getElementById("postTitle").value;
  let post = document.getElementById("postText").value;
  let author = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();


  let postDiv = document.getElementById("post");

  let templatePostHTML = postTemplate({title: title, post: post, author: author});

  postDiv.innerHTML = templatePostHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsTemplate();
};

function postComment() {
  let commentDiv = document.getElementById("comments");

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  let comment = document.getElementById("commentText").value;
  let commenter = document.getElementById("commenterName").value;

  let templateCommentHTML = commentTemplate({comment: comment, commenter: commenter});

  commentDiv.innerHTML += templateCommentHTML;


  // var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  //
  // var commentText = document.getElementById("commentText").value;
  // var commenterName = document.getElementById("commenter").value;
  //
  // var commentsSection = document.getElementById("comments");
  // commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
};
