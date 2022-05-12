function setup() {
    createCanvas(400, 400);
  }
  
  var odds = Math.floor(Math.random()*100);
  
  function draw() {
    background(0);
    base()
    petri1()
    petri2()
    petri3()
    petri4()
    petri5()
    frameRate(0.01)
    
    if(odds > 0 && odds <=20 ){
      petri1()
  }
  
  if(odds > 20 && odds <=40 ){
      petri2()
  }
  
  if(odds > 40 && odds <=60 ){
      petri3()
  }
  
  if(odds > 60 && odds <=80 ){
      petri4()
  }
  
  if(odds > 80 && odds <=100 ){
      petri5()
   }
  }
  
  function base(){
    let c = color(200, random(100,200) , random(100,200));
    fill(c);
    circle(width/2, height/2, 300); 
  }
  
  function petri1(){
    let  c = color(200, random(100,200) , random(100,200));
    fill(c);
    noStroke()
    circle(width/2, height/2, 300); 
    c = color(238, 207, 129);
    let h = random(150,250)
    let i = random (110,150)
    let j = random (10,50)
    let k = random (280,320)
    c = color(random(50,150), random(50,150), random(50,150));
    fill(c);
    noStroke();
    circle(h, 236, j);
    circle(92, h, j);
    circle(h, 200, j);
    circle(116, h, 14);
    circle(i, 222, j);
    circle(253, k, 9);
    
    c = color(random(50,150), random(50,150), random(50,150));
    fill(c);
    noStroke();
    let s1 = random(3,7);
    let s2 = random(10,15);
    let s3 = random(17, 22);
    
    circle(281, 141, s3);
    
    circle(i, 171, s3);
    circle(k, 177, s3);
    
    circle(299, 98, 9);
    circle(k, 198, s1);
    circle(305, h, s2);
    circle(288, 190, s2);
    circle(278, h, s1);
    circle(225, 82, 5);
    circle(h, 88, 5);
    circle(200, 90, s1);
    circle(294, 244, 5);
    circle(305, 269, s1);
    circle(291, 278, s1);
    circle(234, 207, s2);
    circle(229, 197, s1);
    circle(232, k, s1);
    circle(h, 128, 9);
    
    circle(h, 205, 5);
    circle(169, h, 5);
    circle(178, h, 5);
    circle(186, 224, 5);
    circle(205, 232, 5);
    circle(215, 237, 5);
    
    circle(55, 195, 9);
    circle(97, 218, 5);
    circle(94, 223, 5);
    
    circle(120, 241, 5);
    circle(127, k, 5);
  }
  
  function petri2(){
    let c = color(200, random(100,200) , random(100,200));
    fill(c);
    noStroke()
    circle(width/2, height/2, 300); 
    c = color(234,206,222);
    fill(c)
    let h = random(150,250)
    let i = random (110,150)
    let j1 = random (10,20)
    let j2 = random (30,50)
    let j3 = random (50,70)
    let k = random (280,300)
    let s1 = random(3,7);
    let s2 = random(10,15);
    let s3 = random(17, 22);
    
    c = color(random(150,200), random(100,200) , random(100,200));
    c1 = color(random(100,200), 150 , random(150,200));
    noFill();
    strokeWeight(0.5)
    let sw1 = random(2,5);
    let sw2 = random(8,10);
    
    strokeWeight(sw2)
    beginShape();
    stroke(c1);
    curveVertex(46, 87);
    curveVertex(80, i);
    curveVertex(i, h);
    // curveVertex(211, 124);
    // curveVertex(268, 116);
    // curveVertex(303, 143);
    // curveVertex(321, 185);
    // curveVertex(353, 242);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c);
    curveVertex(100, i);
    curveVertex(k, 178);
    curveVertex(90, 150);
    curveVertex(106, h);
    curveVertex(k, 197);
    // curveVertex(147, i);
    // curveVertex(i, 80);
    // curveVertex(229, 71);
    // curveVertex(i, 85);
    endShape();
    
    strokeWeight(sw1)
    beginShape();
    stroke(c);
    curveVertex(317, 87);
    curveVertex(295, 119);
    curveVertex(k, 155);
    curveVertex(317, k);
    curveVertex(329, 212);
    // curveVertex(325, 254);
    // curveVertex(310, 289);
    // curveVertex(269, 308);
    // curveVertex(248, 317);
    // curveVertex(232, 333);
    // curveVertex(175, 352);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c1);
    curveVertex(66, 121);
    curveVertex(60, 169);
    curveVertex(80, 211);
    curveVertex(96, 234);
    curveVertex(259, 194);
    // curveVertex(295, 185);
    // curveVertex(333, 206);
    // curveVertex(340, 223);
    // curveVertex(346, 248);
    endShape();
    
    strokeWeight(sw1)
    beginShape();
    stroke(c1);
    curveVertex(140, 202);
    curveVertex(130, h);
    curveVertex(130, 111);
    curveVertex(h, 80);
    curveVertex(192, j3);
    curveVertex(215, 103);
    // curveVertex(224, 155);
    // curveVertex(215, 221);
    // curveVertex(210, 254);
    // curveVertex(215, 285);
    // curveVertex(230, 313);
    // curveVertex(220, 347);
    // curveVertex(215, 370);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c);
    curveVertex(162, 125);
    curveVertex(150, h);
    curveVertex(125, 218);
    curveVertex(125, 248);
    curveVertex(h, 273);
    curveVertex(193, 292);
    curveVertex(211, 319);
    curveVertex(225, 347);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c);
    curveVertex(186, 42);
    curveVertex(176, 87);
    curveVertex(h, 155);
    curveVertex(206, 196);
    curveVertex(186, h);
    // curveVertex(h, 257);
    // curveVertex(121, 293);
    // curveVertex(111, 320);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c1);
    curveVertex(212, h);
    curveVertex(h, 151);
    curveVertex(289, 191);
    curveVertex(289, 218);
    curveVertex(285, h);
    curveVertex(279, 278);
    endShape();
    
    noStroke()
    c = color(0, 0, 0);
    fill(c);
    circle(h, 130, j1); 
    circle(h, 147, j3); 
    circle(80, 120, 6); 
    circle(h, 88, 6); 
    circle(i, h, 6); 
    circle(245, i, 15); 
    circle(h, i, 6);
    circle(k, 120, 6); 
    circle(325, h, 10); 
    circle(k, 262, j2);
    circle(289, k, 9);
    circle(215, k, j1);
    circle(h, 327, 6);
    circle(125, 257, 6);
    circle(h, 315, j1);
    circle(k, k, j1);
    
    circle(299, 98, 9);
    circle(k, 198, s1);
    circle(305, h, s2);
    circle(288, 190, s2);
    circle(278, h, s1);
    circle(225, 82, 5);
    circle(h, 88, 5);
    circle(200, 90, s1);
    circle(294, 244, 5);
    circle(305, 269, s1);
    circle(291, 278, s1);
    circle(234, 207, s2);
    circle(229, 197, s1);
    circle(232, k, s1);
    circle(h, 128, 9);
    
  }
  
  function petri3(){
    let c = color(200, random(100,200) , random(100,200));
    let c1 = color(random(100,200), 200 , random(100,200));
    let c2 = color(random(150,200), random(100,200) , random(100,200));
    let h = random(150,250)
    let i = random (110,150)
    let j1 = random (10,20)
    let j2 = random (30,50)
    let j3 = random (50,70)
    let k = random (280,300)
    let s1 = random(0,1);
    let s2 = random(1.5, 3);
    
    fill(c);
    noStroke()
    circle(width/2, height/2, 300); 
  
  
    fill(c2);
    strokeWeight(0.5)
    circle(h, 130, j1); 
    circle(h, 147, j3); 
    circle(150, h, j2); 
    circle(h, 88, j2); 
    circle(i, h, j1); 
    circle(245, i, j1); 
    circle(h, i, j3);
    circle(k, 120, j2); 
    circle(325, h, 10); 
    circle(k, 262, j2);
    circle(289, k, 9);
    circle(215, k, j1);
    circle(200, 327, j2);
    stroke(c1)
    strokeWeight(6)
    circle(125, 257, j1);
    circle(h, 315, j1);
    circle(k, k, j1);
    
    circle(299, 98, 9);
    circle(k, 198, s1);
    circle(305, h, s2);
    circle(k, 190, s2);
    circle(278, h, s1);
    circle(225, 82, j3);
    circle(h, 88, j3);
    circle(i, 90, j1);
    circle(k, 244, j1);
    circle(305, 269, s1);
    circle(291, 278, j2);
    circle(234, 207, j2);
    circle(i, 197, j3);
    circle(232, k, j3);
    circle(h, 128, j2);
    
    c = color(255, 255, 255);
    fill(c);
    noStroke();
    circle(281, 141, 12);
    
    circle(323, 171, 12);
    circle(319, 177, 12);
    
    circle(299, 98, 9);
    circle(324, 198, 5);
    circle(305, 166, 5);
    circle(288, 190, 5);
    circle(278, 218, 5);
    circle(225, 82, 5);
    circle(185, 88, 5);
    circle(200, 90, 5);
    circle(294, 244, 5);
    circle(305, 269, 5);
    circle(291, 278, 5);
    circle(234, 207, 5);
    circle(229, 197, 5);
    circle(232, 280, 5);
    circle(177, 128, 9);
    
    circle(146, 205, 5);
    circle(169, 213, 5);
    circle(178, 221, 5);
    circle(186, 224, 5);
    circle(205, 232, 5);
    circle(215, 237, 5);
    
    circle(55, 195, 9);
    circle(97, 218, 5);
    circle(94, 223, 5);
    
    circle(120, 241, 5);
    circle(127, 248, 5);
  
  }
  
  function petri4(){
    let c = color(200, random(100,200) , random(100,200));
    fill(c);
    noStroke();
    circle(width/2, height/2, 300); 
    
    c = color(0, 0, 0);
    noFill();
    strokeWeight(0.5)
    let t = random(150, 180);
    let r = random(125, 150);
    let p = random (100, 170);
    beginShape();
    stroke(0);
    curveVertex(160, 150);
    curveVertex(p, 120);
    curveVertex(120, t);
    curveVertex(211, r);
    curveVertex(268, 156);
    curveVertex(303, r);
    curveVertex(321, 185);
    curveVertex(353, 242);
    endShape();
    
    beginShape();
    stroke(0);
    curveVertex(88, p);
    curveVertex(88, 178);
    curveVertex(95, 192);
    curveVertex(106, 183);
    curveVertex(r, 157);
    curveVertex(r, p);
    curveVertex(200, p);
    curveVertex(229, p);
    curveVertex(272, 85);
    endShape();
    
    beginShape();
    stroke(0);
    curveVertex(317, 87);
    curveVertex(295, 119);
    curveVertex(300, r);
    curveVertex(317, 188);
    curveVertex(329, 212);
    curveVertex(325, 254);
    curveVertex(310, 289);
    curveVertex(269, 300);
    curveVertex(248, 317);
    curveVertex(232, 333);
    curveVertex(t, 352);
    endShape();
    
    beginShape();
    stroke(0);
    curveVertex(p, 121);
    curveVertex(60, t);
    curveVertex(66, 211);
    curveVertex(96, 234);
    curveVertex(259, 194);
    curveVertex(295, 185);
    curveVertex(333, 206);
    curveVertex(340, 223);
    curveVertex(346, 248);
    endShape();
    
    beginShape();
    stroke(0);
    curveVertex(t, 202);
    curveVertex(130, 155);
    curveVertex(r, 111);
    curveVertex(163, 80);
    curveVertex(192, p);
    curveVertex(215, r);
    curveVertex(224, t);
    curveVertex(215, 221);
    curveVertex(210, 254);
    curveVertex(215, 285);
    curveVertex(230, 313);
    curveVertex(220, 347);
    curveVertex(215, 370);
    endShape();
    
    beginShape();
    stroke(0);
    curveVertex(162, 125);
    curveVertex(t, 150);
    curveVertex(125, 218);
    curveVertex(125, 248);
    curveVertex(159, 273);
    curveVertex(193, 292);
    curveVertex(211, 319);
    curveVertex(225, 347);
    endShape();
    
    beginShape();
    stroke(0);
    curveVertex(186, p);
    curveVertex(t, 87);
    curveVertex(202, 155);
    curveVertex(206, 196);
    curveVertex(186, 234);
    curveVertex(p, 257);
    curveVertex(p, 293);
    curveVertex(111, 320);
    endShape();
    
    beginShape();
    stroke(0);
    curveVertex(212, 128);
    curveVertex(249, r);
    curveVertex(289, 191);
    curveVertex(289, 218);
    curveVertex(285, 248);
    curveVertex(279, 278);
    endShape();
    
  //   orange
    c = color(237, 167, 103);
    let b = random(0,50)
    let a = random (0,50)
    let d = random (0,50)
    c = color(b, a, d);
    fill(c);
    noStroke();
    let z = random(250,300);
    let v = random(75, 90);
    circle(97, z, 30);
    circle(206, v, 20);
    
    circle(z, 100, 35);
    circle(z, 120, 20);
    circle(273, v, 20);
    
    circle(z, 159, 27);
  
  // lightyellow
    c = color(255, 236, 187);
    let g = random(50,150)
    let e = random (50,150)
    let f = random (50,150)
    c = color(g, e, f);
    fill(c);
    noStroke();
    let s = random()
    let size1 = random(10, 15);
    let size2 = random(20, 40)
    circle(t, 80, size1);
    circle(240, 80, size2);
    circle(115, r, size1);
    circle(r, t, size2);
    
    ellipse(t, 330, 27, 20);
    
    circle(135, 236, 10);
    circle(269, 269, size1);
    circle(249, 231, 10);
    
  // midyellow
    c = color(238, 207, 129);
    let h = random(150,250)
    let i = random (150,250)
    let j = random (150,250)
    c = color(h, i, j);
    fill(c);
    noStroke();
    circle(228, 236, 22);
    circle(92, 186, 22);
    circle(130, 200, 12);
    circle(156, 216, 14);
    circle(150, 222, 14);
    circle(253, 304, 9);
    
  //   white
    c = color(255, 255, 255);
    fill(c);
    noStroke();
    circle(281, 141, 12);
    
    circle(323, 171, 12);
    circle(319, 177, 12);
    
    circle(299, 98, 9);
    circle(324, 198, 5);
    circle(305, 166, 5);
    circle(288, 190, 5);
    circle(278, 218, 5);
    circle(225, 82, 5);
    circle(185, 88, 5);
    circle(200, 90, 5);
    circle(294, 244, 5);
    circle(305, 269, 5);
    circle(291, 278, 5);
    circle(234, 207, 5);
    circle(229, 197, 5);
    circle(232, 280, 5);
    circle(177, 128, 9);
    
    circle(146, 205, 5);
    circle(169, 213, 5);
    circle(178, 221, 5);
    circle(186, 224, 5);
    circle(205, 232, 5);
    circle(215, 237, 5);
    
    circle(55, 195, 9);
    circle(97, 218, 5);
    circle(94, 223, 5);
    
    circle(120, 241, 5);
    circle(127, 248, 5);
  }
    
  function petri5(){
    let  c = color(200, random(100,200) , random(100,200));
    fill(c);
    noStroke()
    circle(width/2, height/2, 300); 
    c = color(234,206,222);
    fill(c)
    let h = random(150,250)
    let i = random (110,150)
    let j1 = random (10,20)
    let j2 = random (30,50)
    let j3 = random (50,70)
    let k = random (280,300)
    let s1 = random(3,7)
    let s2 = random(10,15)
    let s3 = random(17, 30)
    
    c = color(random(150,200), random(100,200) , random(100,200));
    c1 = color(random(100,200), 150 , random(150,200));
    noFill();
    strokeWeight(0.5)
    let sw1 = random(2,5);
    let sw2 = random(8,10);
    
    strokeWeight(sw2)
    beginShape();
    stroke(c1);
    curveVertex(46, 87);
    curveVertex(80, i);
    curveVertex(i, h);
    // curveVertex(211, 124);
    // curveVertex(268, 116);
    // curveVertex(303, 143);
    // curveVertex(321, 185);
    // curveVertex(353, 242);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c);
    curveVertex(100, i);
    curveVertex(k, 178);
    curveVertex(90, 150);
    curveVertex(106, h);
    curveVertex(k, 197);
    // curveVertex(147, i);
    // curveVertex(i, 80);
    // curveVertex(229, 71);
    // curveVertex(i, 85);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c);
    curveVertex(317, 87);
    curveVertex(295, 119);
    curveVertex(k, h);
    curveVertex(317, k);
    curveVertex(329, 212);
    curveVertex(325, 254);
    curveVertex(310, 289);
    curveVertex(269, 308);
    curveVertex(i, 317);
    // curveVertex(232, 333);
    // curveVertex(175, 352);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c1);
    curveVertex(66, 121);
    curveVertex(60, 169);
    curveVertex(80, 211);
    curveVertex(96, 234);
    curveVertex(259, 194);
    curveVertex(295, 185);
    curveVertex(333, 206);
    // curveVertex(340, 223);
    // curveVertex(346, 248);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c1);
    curveVertex(140, 202);
    curveVertex(130, h);
    curveVertex(130, 111);
    curveVertex(h, 80);
    curveVertex(192, j3);
    curveVertex(215, 103);
    curveVertex(224, 155);
    curveVertex(215, 221);
    curveVertex(210, 254);
    curveVertex(215, 285);
    curveVertex(230, 313);
    // curveVertex(220, 347);
    // curveVertex(215, 370);
    endShape();
    
    strokeWeight(sw2)
    beginShape();
    stroke(c);
    curveVertex(162, 125);
    curveVertex(150, h);
    curveVertex(125, 218);
    curveVertex(125, 248);
    curveVertex(h, 273);
    curveVertex(193, 292);
    curveVertex(211, 319);
    curveVertex(225, 347);
    endShape();
    
    c = color(238, 207, 129);
    let n = random(150,250)
    let o = random (150,250)
    let p = random (150,250)
    c = color(n, o, p);
    fill(c);
    noStroke();
    circle(228, h, s1);
    circle(92, k, s3);
    circle(i, h, s3);
    circle(k, 216, s2);
    circle(110, 222, s2);
    circle(h, 304, s1);
    circle(k, h, s3);
    circle(110, 222, s2);
    circle(h, 304, s1);
  }
    