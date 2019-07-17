import icon from 'react-icons/lib/md/book'

export default {
  name: 'programmeDayTwo',
  title: 'Programme day two',
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
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 5,
        // calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'room',
      title: 'Room',
      type: 'string',
      options: {
        list: [
          {title: 'Main Auditorium', value: 'mainAuditorium'},
          {title: '1', value: '1'},
          {title: '2-3', value: '2-3'},
          {title: '4', value: '4'},
          {title: '5', value: '5'},
          {title: '6', value: '6'},
          {title: '13', value: '13'},
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
    {
      name: 'streamedSessions',
      title: 'Streamed Sessions',
      type: 'string'
    },
    {
      name: 'speakers',
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

  // preview: {
  //   select: {
  //     title: 'title',
  //     timeAndDate: 'timeAndDate',
  //     room: 'room',
  //   }
  // }

  preview: {
    select: {
      title: 'title',
      date: 'timeAndDate',
      speakerName0: 'speaker.0.name',
      speakerName1: 'speaker.1.name',
      room: 'room'
    },
    prepare(selection) {
      const speaker = [selection.speakerName0, selection.speakerName1].filter(Boolean).join(', ')
      const room = selection.room

      return {
        title: `${selection.title}`,
        subtitle: `Speakers: ${speaker}`,
      }
    }
  }
}
