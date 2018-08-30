// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// HTML

var bar = new ProgressBar.Circle(html, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(1);  // Number from 0.0 to 1.0

// CSS

var bar = new ProgressBar.Circle(css, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(0.9);  // Number from 0.0 to 1.0



// SASS

var bar = new ProgressBar.Circle(sass, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(0.7);  // Number from 0.0 to 1.0


// BOOTSTRAP

var bar = new ProgressBar.Circle(bootstrap, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(1);  // Number from 0.0 to 1.0


// GULP

var bar = new ProgressBar.Circle(gulp, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(0.6);  // Number from 0.0 to 1.0



// JS

var bar = new ProgressBar.Circle(js, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 8 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(0.3);  // Number from 0.0 to 1.0

// PHP

var bar = new ProgressBar.Circle(php, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 8 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(0.3);  // Number from 0.0 to 1.0


// PHOTOSHOP

var bar = new ProgressBar.Circle(photoshop, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 8 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(0.8);  // Number from 0.0 to 1.0

// ILLUSTRATOR

var bar = new ProgressBar.Circle(illustrator, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 8 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(0.8);  // Number from 0.0 to 1.0



// INGLES

var bar = new ProgressBar.Circle(ingles, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'bounce',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 8 },
  to: { color: '#168282', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(Math.round(circle.value() * 100) + ' %');
    }

  }
});

bar.text.style.fontSize = '1.8rem';
bar.text.style.color = 'white';
bar.animate(0.9);  // Number from 0.0 to 1.0