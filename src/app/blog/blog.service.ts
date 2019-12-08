export class BlogService {
  private blog

  constructor() {
    this.blog = [
      {
        author: 'Christian Soler',
        createdAt: '2016-01-24T15:42:40.660Z',
        imageUrl: 'http://i.imgur.com/7vZ5556.jpg',
        isActive: true,
        type: 'Markdown',
        permalink: 'student-at-coder-camps',
        preview: `I know plenty of people are looking into all these different programming Bootcamps. 
Since I attended one, I would like to share my opinion. 
I will start by talking about myself, and my programming experience prior to the camp. 
In addition I will share information about the structure of the camp during my time there.`,
        title: 'Student at Coder Camps',
        updatedAt: '2016-01-30T03:59:24.934Z',
      },
      {
        author: 'Christian Soler',
        createdAt: '2016-01-24T15:42:40.660Z',
        imageUrl: 'http://i.imgur.com/7vZ5556.jpg',
        isActive: true,
        type: 'Markdown',
        permalink: 'student-at-coder-camps',
        preview: `I know plenty of people are looking into all these different programming Bootcamps. 
Since I attended one, I would like to share my opinion. 
I will start by talking about myself, and my programming experience prior to the camp. 
In addition I will share information about the structure of the camp during my time there.`,
        title: 'Student at Coder Camps',
        updatedAt: '2016-01-30T03:59:24.934Z',
      },
      {
        author: 'Christian Soler',
        createdAt: '2016-01-24T15:42:40.660Z',
        imageUrl: 'http://i.imgur.com/7vZ5556.jpg',
        isActive: true,
        type: 'Markdown',
        permalink: 'student-at-coder-camps',
        preview: `I know plenty of people are looking into all these different programming Bootcamps. 
Since I attended one, I would like to share my opinion. 
I will start by talking about myself, and my programming experience prior to the camp. 
In addition I will share information about the structure of the camp during my time there.`,
        title: 'Student at Coder Camps',
        updatedAt: '2016-01-30T03:59:24.934Z',
      },
    ]
  }

  getBlog() {
    return this.blog
  }
}
