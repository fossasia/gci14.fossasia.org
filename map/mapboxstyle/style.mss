// Languages: name (local), name_en, name_fr, name_es, name_de
@name: '[name]';
@name_en: '[name_en]';
@name_de: '[name_de]';

// Common Colors //
@water: #686868;



Map {
  background-color:#ababab;
}


// Political boundaries //

#admin {
  line-join: round;
  line-color: #f1f1f1;
  [maritime=1] { line-color: darken(@water, 3%); }
  // Countries
  [admin_level=2] {
    line-width: 0.6;
    [zoom>=6] { line-width: 2; }
    [zoom>=8] { line-width: 4; }
    [disputed=1] { line-dasharray: 4,4; }
  }
  // States / Provices / Subregions
  [admin_level>=3] {
    line-width: 0.2;
    line-dasharray: 10,3,3,3;
    [zoom>=8] { line-width: 0.6; }
    [zoom>=12] { line-width: 3; }
  }
}

// Places //

#country_label_line {
  line-color: #324;
  line-opacity: 0.05;
}

#place_label{
  [type='city'][zoom<=15] {
    text-name: @name;
    text-face-name: 'Open Sans Semibold';
    text-fill: #a5a1a1;
	text-halo-fill: #ffffff;
    text-halo-radius:	1.5;
    text-size: 16;
    text-wrap-width: 100;
    text-wrap-before: true;
    [zoom>=10] { text-size: 18; }
    [zoom>=12] { text-size: 24; }
  }
  [type='town'][zoom<=17] {
    text-name: @name;
    text-face-name: 'Open Sans Regular';
    text-fill: #a5a1a1;
	text-halo-fill: #ffffff;
    text-halo-radius:	1.5;
    text-size: 14;
    text-wrap-width: 100;
    text-wrap-before: true;
    [zoom>=10] { text-size: 16; }
    [zoom>=12] { text-size: 20; }
  }
  [type='village'] {
    text-name: @name;
    text-face-name: 'Open Sans Regular';
    text-fill: #a5a1a1;
	text-halo-fill: #ffffff;
    text-halo-radius:	1.5;
    text-size: 12;
    text-wrap-width: 100;
    text-wrap-before: true;
    [zoom>=12] { text-size: 14; }
    [zoom>=14] { text-size: 18; }
  }
  [type='hamlet'],
  [type='suburb'],
  [type='neighbourhood'] {
    text-name: @name;
    text-face-name: 'Open Sans Regular';
    text-fill: #a5a1a1;
	text-halo-fill: #ffffff;
    text-halo-radius:	1.5;
    text-size: 12;
    text-wrap-width: 100;
    text-wrap-before: true;
    [zoom>=14] { text-size: 14; }
    [zoom>=16] { text-size: 16; }
  }
}
// Water Features //

#water {
  polygon-fill: @water;
  polygon-gamma: 0.6;
}





