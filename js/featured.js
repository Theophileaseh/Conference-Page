const SpeakersOne = [
    {
      name: 'John',
      position: 'Executive Director',
      description: 'kdfjnvjlgbdentgjlbntrbgl jl tj44/jn4k5 44k5ntk 4tj 4',
      featured_image: 'p.png',
    },
    {
      name: 'John',
      position: 'Executive Director',
      description: 'kdfjnvjlgbdentgjlbntrbgl jl tj44/jn4k5 44k5ntk 4tj 4',
      featured_image: 'p.png',
    },
    {
      name: 'John',
      position: 'Executive Director',
      description: 'kdfjnvjlgbdentgjlbntrbgl jl tj44/jn4k5 44k5ntk 4tj 4',
      featured_image: 'p.png',
    },
    {
      name: 'John',
      position: 'Executive Director',
      description: 'kdfjnvjlgbdentgjlbntrbgl jl tj44/jn4k5 44k5ntk 4tj 4',
      featured_image: 'p.png',
    }, 

  ];
  
  const speakersOneContainer = document.getElementById('speakers-1');
  
  const allSpeakersOne = SpeakersOne
    .map(
      (speakersOnes) => `
      <div class="single-speaker">
      <div class="speaker-img">
          <img src="img/span-bg.png" class="img-bg">
          <img src="img/${speakersOnes.featured_image}" class="sp-img">
      </div>
      <div class="speaker-info">
          <h3 class="speaker-name">${speakersOnes.name}</h3>
          <span class="speaker-position">${speakersOnes.position}</span>
          <p class="about-speaker">${speakersOnes.description}</p>
      </div>
  </div>
    `,
    ).join('');
  
  speakersOneContainer.innerHTML = allSpeakersOne;  


  // For second set of speakers


  const SpeakersTwo = [
    {
      name2: 'John',
      position2: 'Executive Director',
      description2: 'kdfjnvjlgbdentgjlbntrbgl jl tj44/jn4k5 44k5ntk 4tj 4',
      featured_image2: 'p.png',
    },
    {
      name2: 'John',
      position2: 'Executive Director',
      description2: 'kdfjnvjlgbdentgjlbntrbgl jl tj44/jn4k5 44k5ntk 4tj 4',
      featured_image2: 'p.png',
    },
    {
      name2: 'John',
      position2: 'Executive Director',
      description2: 'kdfjnvjlgbdentgjlbntrbgl jl tj44/jn4k5 44k5ntk 4tj 4',
      featured_image2: 'p.png',
    },
    {
      name2: 'John',
      position2: 'Executive Director',
      description2: 'kdfjnvjlgbdentgjlbntrbgl jl tj44/jn4k5 44k5ntk 4tj 4',
      featured_image2: 'p.png',
    }, 

  ];
  
  const speakersTwoContainer = document.getElementById('speakers-2');
  
  const allSpeakersTwo = SpeakersTwo
    .map(
      (speakersTwos) => `
      <div class="single-speaker">
      <div class="speaker-img">
          <img src="img/span-bg.png" class="img-bg">
          <img src="img/${speakersTwos.featured_image2}" class="sp-img">
      </div>
      <div class="speaker-info">
          <h3 class="speaker-name">${speakersTwos.name2}</h3>
          <span class="speaker-position">${speakersTwos.position2}</span>
          <p class="about-speaker">${speakersTwos.description2}</p>
      </div>
  </div>
    `,
    ).join('');
  
  speakersTwoContainer.innerHTML = allSpeakersTwo; 
