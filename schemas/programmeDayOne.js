import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'programmeDayOne',
  title: 'Programme day one',
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
      name: 'timeAndDate',
      title: 'Time and date',
      type: 'datetime'
    },
    {
      name: 'room',
      title: 'Room',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'streamedSessions',
      title: 'Streamed Sessions',
      type: 'string'
    },
    {
      name: 'speaker',
      title: 'Speakers',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'speaker' },
        ],
      }]
    },
  ],

  preview: {
    select: {
      title: 'title',
      timeAndDate: 'timeAndDate',
      room: 'room',
    }
  }

  // preview: {
  //   select: {
  //     title: 'title',
  //     date: 'timeAndDate',
  //     castName0: 'castMembers.0.person.name',
  //     castName1: 'castMembers.1.person.name'
  //   },
  //   prepare(selection) {
  //     const year = selection.date && selection.date.split('-')[0]
  //     const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

  //     return {
  //       title: `${selection.title} ${year ? `(${year})` : ''}`,
  //       date: selection.date,
  //       subtitle: cast,
  //       media: selection.media
  //     }
  //   }
  // }
}
