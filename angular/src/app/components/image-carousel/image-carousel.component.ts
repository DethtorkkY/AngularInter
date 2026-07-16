import { Component } from '@angular/core';

interface CarouselImage {
  id: number;
  url: string;
}

interface Dot {
  index: number;
  ellipsis?: boolean;
}

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {

  images: CarouselImage[] = [
    { id: 1, url: 'https://picsum.photos/800/450?random=1' },
    { id: 2, url: 'https://picsum.photos/800/450?random=2' },
    { id: 3, url: 'https://picsum.photos/800/450?random=3' },
    { id: 4, url: 'https://picsum.photos/800/450?random=4' },
    { id: 5, url: 'https://picsum.photos/800/450?random=5' },
    { id: 6, url: 'https://picsum.photos/800/450?random=6' },
    { id: 7, url: 'https://picsum.photos/800/450?random=7' },
    { id: 8, url: 'https://picsum.photos/800/450?random=8' },
    { id: 9, url: 'https://picsum.photos/800/450?random=9' },
    { id: 10, url: 'https://picsum.photos/800/450?random=10' },
    { id: 11, url: 'https://picsum.photos/800/450?random=11' },
    { id: 12, url: 'https://picsum.photos/800/450?random=12' },
    { id: 13, url: 'https://picsum.photos/800/450?random=13' },
    { id: 14, url: 'https://picsum.photos/800/450?random=14' },
    { id: 15, url: 'https://picsum.photos/800/450?random=15' },
    { id: 16, url: 'https://picsum.photos/800/450?random=16' },
    { id: 17, url: 'https://picsum.photos/800/450?random=17' },
    { id: 18, url: 'https://picsum.photos/800/450?random=18' },
    { id: 19, url: 'https://picsum.photos/800/450?random=19' },
    { id: 20, url: 'https://picsum.photos/800/450?random=20' },
    { id: 21, url: 'https://picsum.photos/800/450?random=21' },
    { id: 22, url: 'https://picsum.photos/800/450?random=22' },
    { id: 23, url: 'https://picsum.photos/800/450?random=23' },
    { id: 24, url: 'https://picsum.photos/800/450?random=24' },
    { id: 25, url: 'https://picsum.photos/800/450?random=25' },
    { id: 26, url: 'https://picsum.photos/800/450?random=26' },
    { id: 27, url: 'https://picsum.photos/800/450?random=27' },
    { id: 28, url: 'https://picsum.photos/800/450?random=28' },
    { id: 29, url: 'https://picsum.photos/800/450?random=29' },
    { id: 30, url: 'https://picsum.photos/800/450?random=30' },
    { id: 31, url: 'https://picsum.photos/800/450?random=31' },
    { id: 32, url: 'https://picsum.photos/800/450?random=32' },
    { id: 33, url: 'https://picsum.photos/800/450?random=33' },
    { id: 34, url: 'https://picsum.photos/800/450?random=34' },
    { id: 35, url: 'https://picsum.photos/800/450?random=35' },
    { id: 36, url: 'https://picsum.photos/800/450?random=36' },
    { id: 37, url: 'https://picsum.photos/800/450?random=37' },
    { id: 38, url: 'https://picsum.photos/800/450?random=38' },
    { id: 39, url: 'https://picsum.photos/800/450?random=39' },
    { id: 40, url: 'https://picsum.photos/800/450?random=40' },
    { id: 41, url: 'https://picsum.photos/800/450?random=41' },
    { id: 42, url: 'https://picsum.photos/800/450?random=42' },
    { id: 43, url: 'https://picsum.photos/800/450?random=43' },
    { id: 44, url: 'https://picsum.photos/800/450?random=44' },
    { id: 45, url: 'https://picsum.photos/800/450?random=45' },
    { id: 46, url: 'https://picsum.photos/800/450?random=46' },
    { id: 47, url: 'https://picsum.photos/800/450?random=47' },
    { id: 48, url: 'https://picsum.photos/800/450?random=48' },
    { id: 49, url: 'https://picsum.photos/800/450?random=49' },
    { id: 50, url: 'https://picsum.photos/800/450?random=50' },
    { id: 51, url: 'https://picsum.photos/800/450?random=51' },
    { id: 52, url: 'https://picsum.photos/800/450?random=52' },
    { id: 53, url: 'https://picsum.photos/800/450?random=53' },
    { id: 54, url: 'https://picsum.photos/800/450?random=54' },
    { id: 55, url: 'https://picsum.photos/800/450?random=55' },
    { id: 56, url: 'https://picsum.photos/800/450?random=56' },
    { id: 57, url: 'https://picsum.photos/800/450?random=57' },
    { id: 58, url: 'https://picsum.photos/800/450?random=58' },
    { id: 59, url: 'https://picsum.photos/800/450?random=59' },
    { id: 60, url: 'https://picsum.photos/800/450?random=60' },
    { id: 61, url: 'https://picsum.photos/800/450?random=61' },
    { id: 62, url: 'https://picsum.photos/800/450?random=62' },
    { id: 63, url: 'https://picsum.photos/800/450?random=63' },
    { id: 64, url: 'https://picsum.photos/800/450?random=64' },
    { id: 65, url: 'https://picsum.photos/800/450?random=65' },
    { id: 66, url: 'https://picsum.photos/800/450?random=66' },
    { id: 67, url: 'https://picsum.photos/800/450?random=67' },
    { id: 68, url: 'https://picsum.photos/800/450?random=68' },
    { id: 69, url: 'https://picsum.photos/800/450?random=69' },
    { id: 70, url: 'https://picsum.photos/800/450?random=70' },
    { id: 71, url: 'https://picsum.photos/800/450?random=71' },
    { id: 72, url: 'https://picsum.photos/800/450?random=72' },
    { id: 73, url: 'https://picsum.photos/800/450?random=73' },
    { id: 74, url: 'https://picsum.photos/800/450?random=74' },
    { id: 75, url: 'https://picsum.photos/800/450?random=75' },
    { id: 76, url: 'https://picsum.photos/800/450?random=76' },
    { id: 77, url: 'https://picsum.photos/800/450?random=77' },
    { id: 78, url: 'https://picsum.photos/800/450?random=78' },
    { id: 79, url: 'https://picsum.photos/800/450?random=79' },
    { id: 80, url: 'https://picsum.photos/800/450?random=80' },
    { id: 81, url: 'https://picsum.photos/800/450?random=81' },
    { id: 82, url: 'https://picsum.photos/800/450?random=82' },
    { id: 83, url: 'https://picsum.photos/800/450?random=83' },
    { id: 84, url: 'https://picsum.photos/800/450?random=84' },
    { id: 85, url: 'https://picsum.photos/800/450?random=85' },
    { id: 86, url: 'https://picsum.photos/800/450?random=86' },
    { id: 87, url: 'https://picsum.photos/800/450?random=87' },
    { id: 88, url: 'https://picsum.photos/800/450?random=88' },
    { id: 89, url: 'https://picsum.photos/800/450?random=89' },
    { id: 90, url: 'https://picsum.photos/800/450?random=90' },
    { id: 91, url: 'https://picsum.photos/800/450?random=91' },
    { id: 92, url: 'https://picsum.photos/800/450?random=92' },
    { id: 93, url: 'https://picsum.photos/800/450?random=93' },
    { id: 94, url: 'https://picsum.photos/800/450?random=94' },
    { id: 95, url: 'https://picsum.photos/800/450?random=95' },
    { id: 96, url: 'https://picsum.photos/800/450?random=96' },
    { id: 97, url: 'https://picsum.photos/800/450?random=97' },
    { id: 98, url: 'https://picsum.photos/800/450?random=98' },
    { id: 99, url: 'https://picsum.photos/800/450?random=99' },
    { id: 100, url: 'https://picsum.photos/800/450?random=100' },
    { id: 101, url: 'https://picsum.photos/800/450?random=101' },
    { id: 102, url: 'https://picsum.photos/800/450?random=102' },
    { id: 103, url: 'https://picsum.photos/800/450?random=103' },
    { id: 104, url: 'https://picsum.photos/800/450?random=104' },
    { id: 105, url: 'https://picsum.photos/800/450?random=105' },
    { id: 106, url: 'https://picsum.photos/800/450?random=106' },
    { id: 107, url: 'https://picsum.photos/800/450?random=107' },
    { id: 108, url: 'https://picsum.photos/800/450?random=108' },
    { id: 109, url: 'https://picsum.photos/800/450?random=109' },
    { id: 110, url: 'https://picsum.photos/800/450?random=110' }
];

  currentIndex = 0;

  get visibleImages(): CarouselImage[] {
    const result: CarouselImage[] = [];
    for (let i = -2; i <= 2; i++) {
      let index = this.currentIndex + i;
      if (index < 0) {
        index += this.images.length;
      }
      if (index >= this.images.length) {
        index -= this.images.length;
      }
      result.push(this.images[index]);
    }
    return result;
  }

  getPosition(index: number): number {
    return index - 2;
  }

  next(){
    this.currentIndex++;
    if(this.currentIndex>=this.images.length){
      this.currentIndex=0;
    }
  }

  previous(){
    this.currentIndex--;
    if(this.currentIndex<0){
      this.currentIndex=this.images.length-1;
    }
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  get visibleDots(): number[] {
    const total = this.images.length;
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i);
    }
    if (this.currentIndex < 3) {
      return [0, 1, 2, 3, 4];
    }
    if (this.currentIndex > total - 4) {
      return [
        total - 5,
        total - 4,
        total - 3,
        total - 2,
        total - 1
      ];
    }

    return [
      this.currentIndex - 3,
      this.currentIndex - 2,
      this.currentIndex - 1,
      this.currentIndex,
      this.currentIndex + 1,
      this.currentIndex + 2,
      this.currentIndex + 3
    ];
  }
}