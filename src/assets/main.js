$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/tctimmeh.json',
    dataType: 'jsonp',
    success: (data) => {
      let badges = $('#badges');
      for (let course of data.courses.completed) {
        badges.append($(`<div class="course">
          <h3>${course.title}</h3>
          <img src="${course.badge}" />
          <a href="${course.url}" class="btn btn-primary" target="_blank">See Course</a>
        </div>`));
      }
    }
  });

});
