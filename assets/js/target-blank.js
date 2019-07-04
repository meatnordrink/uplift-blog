let otherOnload = window.onload;

window.onload = function(){
  if (otherOnload) otherOnload();

  let posts = document.getElementsByClassName("article-post");

  for (let i=0; i<posts.length; i++){
    let post = posts[i];
    let links = post.getElementsByTagName("a");

    for (let j=0; j<links.length; j++){
      let link = links[j];
      link.setAttribute("target", "_blank");
    }
  }
};