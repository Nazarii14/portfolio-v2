var colors = ["blue", "green", "white", "yellow", "red", "orange"];
var pieces = document.getElementsByClassName("piece");

function mx(i, j) {
  const result = ([2, 4, 3, 5][j % 4 | 0] +
      (i % 2) * (((j | 0) % 4) * 2 + 3) +
      2 * ((i / 2) | 0)) % 6;
  return result;
}

function getAxis(face) {
  const result = String.fromCharCode("X".charCodeAt(0) + face / 2); // X, Y or Z
  return result;
}

function assembleCube() {
  function moveto(face) {
    id = id + (1 << face);
    pieces[i].children[face]
      .appendChild(document.createElement("div"))
      .setAttribute("class", "sticker " + colors[face]);
    const result = "translate" + getAxis(face) + "(" + ((face % 2) * 4 - 2) + "em)";
    return result;
  }
  for (var id, x, i = 0; (id = 0), i < 26; i++) {
    x = mx(i, i % 18);

    pieces[i].style.transform =
      "rotateX(0deg)" + moveto(i % 6) + (i > 5 ? moveto(x) + (i > 17 ? moveto(mx(x, x + 2)) : "") : "");
    pieces[i].setAttribute("id", "piece" + id);
  }
}

function getPieceBy(face, index, corner) {
  const result = document.getElementById(
    "piece" +
      ((1 << face) +
        (1 << mx(face, index)) +
        (1 << mx(face, index + 1)) * corner)
  );
  return result;
}

function swapStickersBetweenPieces(piece1, piece2) {
  function swapClassNames(element1, element2) {
      var temp = element1.className;
      element1.className = element2.className;
      element2.className = temp;
  }
  var stickersPiece1 = piece1.querySelectorAll(".sticker");
  var stickersPiece2 = piece2.querySelectorAll(".sticker");

  for (var i = 0; i < Math.min(stickersPiece1.length, stickersPiece2.length); i++) {
      swapClassNames(stickersPiece1[i], stickersPiece2[stickersPiece2.length - 1 - i]);
  }
}

function swapPieces(face, times, axis, pieces, cw) {
  if (axis == -1 && pieces == -1) {
    for (var i = 0; i < 6 * times; i++) {
      var piece1 = getPieceBy(face, i / 2, i % 2);
      var piece2 = getPieceBy(face, i / 2 + 1, i % 2);

      for (var j = 0; j < 5; j++) {
        var idx1, idx2;
        if (j < 4) {
          idx1 = mx(face, j);
          idx2 = mx(face, j + 1);
        } else {
          idx1 = face;
          idx2 = face;
        }

        var sticker1 = piece1.children[idx1].firstChild;
        var sticker2 = piece2.children[idx2].firstChild;       
        var className = sticker1 ? sticker1.className : "";
        
        if (className) {
          sticker1.className = sticker2.className;
          sticker2.className = className;
        }
      }
    }
  }
  else {
    for (let i = 0; i < cw; i++) {
      var edges = [pieces[0], pieces[2], pieces[4], pieces[6]];
      var edge0 = edges[0];
      var edge1 = edges[1];
      var edge2 = edges[2];
      var edge3 = edges[3];
      swapStickersBetweenPieces(edge0, edge1);
      swapStickersBetweenPieces(edge1, edge2);
      swapStickersBetweenPieces(edge2, edge3);
  
      var centers = [pieces[1], pieces[3], pieces[5], pieces[7]];
      var center0 = centers[0];
      var center1 = centers[1];
      var center2 = centers[2];
      var center3 = centers[3];
      swapStickersBetweenPieces(center0, center1);
      swapStickersBetweenPieces(center1, center2);
      swapStickersBetweenPieces(center2, center3);
    }
  }
}

function getPiecesByAxis(axis) {
  if (axis == 0) {
    const piece1 = document.getElementById('piece5');
    const piece2 = document.getElementById('piece4');
    const piece3 = document.getElementById('piece6');
    const piece4 = document.getElementById('piece2');
    const piece5 = document.getElementById('piece10');
    const piece6 = document.getElementById('piece8');
    const piece7 = document.getElementById('piece9');
    const piece8 = document.getElementById('piece1');
    return [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8];
  }
  else if (axis == 1) {
    const piece1 = document.getElementById('piece36');
    const piece2 = document.getElementById('piece4');
    const piece3 = document.getElementById('piece20');
    const piece4 = document.getElementById('piece16');
    const piece5 = document.getElementById('piece24');
    const piece6 = document.getElementById('piece8');
    const piece7 = document.getElementById('piece40');
    const piece8 = document.getElementById('piece32');
    return [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8];
  }
  else if (axis == 2) {
    const piece1 = document.getElementById('piece18');
    const piece2 = document.getElementById('piece2');
    const piece3 = document.getElementById('piece34');
    const piece4 = document.getElementById('piece32');
    const piece5 = document.getElementById('piece33');
    const piece6 = document.getElementById('piece1');
    const piece7 = document.getElementById('piece17');
    const piece8 = document.getElementById('piece16');
    return [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8];
  }
}

export function animateRotation(face, cw, currentTime, axis, times) {
  if (face != -1) {
    var k = 0.3 * ((face % 2) * 2 - 1) * (2 * cw - 1);
    var cubes = Array(9).fill(pieces[face]).map(
      function (value, index) {
        return index ? getPieceBy(face, index / 2, index % 2) : value;
      });
  }
  else {
    var k = 0.3 * ((axis % 3) * 2 - 1) * (2 * cw - 1);
    var cubes = getPiecesByAxis(axis);
  }

  (function rotatePieces() {
    var passed = Date.now() - currentTime
    if (face != -1) {
      var style = "rotate" + getAxis(face) + "(" + k * passed * (passed < 300) + "deg)";
    }
    else {
      var xyz;
      if (axis == 0) {
        xyz = 'Z';
        var clockwise = times == 1 ? 1 : -1;
        var angle = clockwise * k * passed * (passed < 300)
      }
      else if (axis == 1) {
        xyz = 'X';
        var clockwise = times == 1 ? -1 : 1;
        var angle = clockwise * k * passed * (passed < 300)
      }
      else if (axis == 2) {
        xyz = 'Y';
        var clockwise = times == 1 ? 1 : -1;
        var angle = clockwise * k * passed * (passed < 300) / 3;
      }
      var style = "rotate" + xyz + "(" + angle + "deg)";
    }
 
    cubes.forEach(function (piece) {
      piece.style.transform = piece.style.transform.replace(
        /rotate.\(\S+\)/,
        style
      );
    });

    if (passed >= 300) {
      if (face != -1) { 
        return swapPieces(face, 3 - 2 * cw, -1, -1, -1);
      }
      else {
        return swapPieces(-1, 1, axis, cubes, times);
      }
    }
    requestAnimationFrame(rotatePieces);
  })();
}

function mousedown(md_e) {
  var startXY = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number);
  var element = md_e.target.closest(".element");
  var piece = md_e.target.closest(".piece");
  var face = [].indexOf.call((element || cube).parentNode.children, element);

  function mousemove(mm_e) {
    if (element) {
      var gid = /\d/.exec(
        document.elementFromPoint(mm_e.pageX, mm_e.pageY).id
      );      
      if (gid && gid.input.includes("anchor")) {
        mouseup();
        var e = element.parentNode.children[mx(face, Number(gid) + 3)].hasChildNodes();
        animateRotation(mx(face, Number(gid) + 1 + 2 * e), e, Date.now(), -1);
      }
    } else {
      pivot.style.transform = "rotateX(" +
      (startXY[0] - (mm_e.pageY - md_e.pageY) / 2) + "deg)" +
      "rotateY(" + (startXY[1] + (mm_e.pageX - md_e.pageX) / 2) + "deg)";
    }
  }
  function mouseup() {
    document.body.appendChild(guide);
    scene.removeEventListener("mousemove", mousemove);
    document.removeEventListener("mouseup", mouseup);
    scene.addEventListener("mousedown", mousedown);
  }

  (element || document.body).appendChild(guide);
  scene.addEventListener("mousemove", mousemove);
  document.addEventListener("mouseup", mouseup);
  scene.removeEventListener("mousedown", mousedown);
}

document.ondragstart = function () {
  return false;
};

window.addEventListener("load", assembleCube);
scene.addEventListener("mousedown", mousedown);

function simulateCubeRotation() {
    var rotationX = 0;
    var rotationY = 0;
    var rotationSpeedX = 0.5;
    var rotationSpeedY = 0.5;
  
    function simulateRotation() {
      rotationX += rotationSpeedX;
      rotationY += rotationSpeedY;
  
      cube.style.transform = "rotateX(" + rotationX + "deg) rotateY(" + rotationY + "deg)";
  
      requestAnimationFrame(simulateRotation);
    }
    simulateRotation();
  }
  
simulateCubeRotation();


function simulateCubeMovement() {
    var cube = document.getElementById('scene');
    var scrollSpeedFactor = 0.25;
    var initialScrollPosition = window.pageYOffset;
    var cubePosition = 0;

    function moveCube() {
        var currentScrollPosition = window.pageYOffset;
        var scrollDistance = currentScrollPosition - initialScrollPosition;
        
        cubePosition += scrollDistance * scrollSpeedFactor;
        cube.style.transform = "translateY(" + cubePosition + "px)";

        initialScrollPosition = currentScrollPosition;

        requestAnimationFrame(moveCube);
    }

    moveCube();
}

simulateCubeMovement();
