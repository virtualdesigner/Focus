(function() {
  let content = document.getElementsByTagName("ytd-app")[0];

  // let contentClone = content.cloneNode(true);
  let content_parent = content.parentNode;

  // content_parent.removeChild(content);

  let para_tag = document.createElement("p");
  para_tag.innerText =
    "The greatest error of a man is to think that he is weak by nature, evil by nature.\n\n Every man is divine and strong in his real nature.\n\n What are weak and evil are his habits, his desires and thoughts, but not himself.";
  para_tag.classList.add("quote-smde");

  let image_tag = document.createElement("img");
  image_tag.src = chrome.runtime.getURL("./img.jpg");
  image_tag.style =
    "background-size:cover; background-position: center;height: 100vh; width: 100vw; margin: 0; padding: 0; z-index: 2999;position: relative;";

  content_parent.insertBefore(image_tag, content_parent.firstChild);

  content_parent.insertBefore(para_tag, content_parent.firstChild);

  let head_ad = document.getElementById("masthead-ad");
  head_ad.parentNode.removeChild(head_ad);

  fetch("https://source.unsplash.com/1920x1080/?flowers,nature").then(function(
    response
  ) {
    image_tag.src = response.url;
  });

  para_tag.addEventListener("click", function clickHandler() {
    content_parent.removeChild(para_tag);
    content_parent.removeChild(image_tag);
    document.body.style = "overflow:visible !important;";
  });
})();
