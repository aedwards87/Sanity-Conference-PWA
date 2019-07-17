import icon from 'react-icons/lib/md/location-history'

export default {
  name: 'streamedSessions',
  title: 'Streamed Sessions',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'stream',
      title: 'Stream',
      type: 'string',
      options: {
        list: [
          {title: 'Stream 1', value: 'streamOne'},
          {title: 'Stream 2', value: 'streamTwo'},
          {title: 'Stream 3', value: 'streamThree'},
          {title: 'Stream 4', value: 'streamFour'},
          {title: 'Stream 5', value: 'streamFive'},
          {title: 'Stream 6', value: 'streamSix'},
        ],
        layout: 'dropdown',
        direction: 'vertical',
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
  ],

  preview: {
    select: {
      title: 'title',
      timeAndDate: 'timeAndDate',
      room: 'room',
    }
  }
}