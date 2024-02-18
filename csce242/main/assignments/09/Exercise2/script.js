
  var images = document.querySelectorAll('.img img');
  var description = document.getElementById('imageDescription');

  var descriptions = {
      "yogaImage1": "Moutain Pose",
      "yogaImage2": "Downward Dog Pose",
      "yogaImage3": "Chair Pose",
      "yogaImage4": "Easy Pose",
      "yogaImage5": "Egal pose",
      "yogaImage6": "Cow Pose",
      "yogaImage7": "Plow Pose",
      "yogaImage8": "Child Pose"
  };

  for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        var imageId = this.id;
        var description = document.getElementById('imageDescription');
        description.textContent = descriptions[imageId];
    };
  }