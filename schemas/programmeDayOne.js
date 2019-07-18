import icon from 'react-icons/lib/md/book'

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
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    // {
    //   name: 'streamedSessions',
    //   title: 'Streamed Sessions',
    //   type: 'array',
    //   of: [{
    //     type: 'reference',
    //     to: [
    //       { type: 'streamedSessions' },
    //     ],
    //   }]
    // },
    {
      name: 'streamedSessions',
      title: 'Streamed Session',
      type: 'string',
      options: {
        list: [
          {title: 'Type 1', value: 'type1'},
          {title: 'Type 2', value: 'type2'},
          {title: 'Type 3', value: 'type3'},
          {title: 'Type 4', value: 'type4'},
          {title: 'Type 5', value: 'type5'},
          {title: 'Type 6', value: 'type6'},
        ],
        layout: 'radio',
        direction: 'vertical',
      },
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

  // preview: {
  //   select: {
  //     title: 'title',
  //     date: 'timeAndDate',
  //     room: 'room',
  //   }
  // }

  preview: {
    select: {
      title: 'title',
      date: 'timeAndDate',
      speakerName0: 'speaker.0.name',
      speakerName1: 'speaker.1.name'
    },
    prepare(selection) {
      const speaker = [selection.speakerName0, selection.speakerName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title}`,
        subtitle: `Speakers: ${speaker}`,
      }
    }
  }
}
