var config = {
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    accessToken: 'pk.eyJ1Ijoic2hpcmF6dXIiLCJhIjoiY20zcnB2aXg1MDd0djJrcHpzdml2em9rOSJ9.JF1m7ea2v67W1fhQAhDNrQ',
    theme: 'light',
    title: 'Your Title Goes Here',
    subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    byline: 'By Shira Zur and Kevin Kemegue',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'pre-story',
            alignment: 'left',
            hidden: false,
            title: 'Title',
            image: '',
            description: '',
            legend: false,
            location: {
                center: [-120.376352, 47.410658],  
                zoom: 6, 
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                },
                 {
                     layer: 'vehicles-layer',
                     opacity: 0
                 },
                {
                    layer: 'hospital-layer',
                    opacity: 0
                }
            ],
        },
        {
            id: 'chapter-one',
            alignment: 'left',
            hidden: false,
            title: 'Chapter One',
            image: '',
            description: '',
            legend: false,
            location: {
                center: [-122.336117, 47.607382], 
                zoom: 10, 
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'Chapter Two',
            image: '',
            description: '',
            legend: false,
            location: {
                center: [-122.336117, 47.607382],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 1
                },
                {
                    layer: 'hospital-layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-three',
            alignment: 'left',
            hidden: false,
            title: 'Chapter Three',
            image: '',
            description: '',
            legend: true,
            location: {
                center: [-122.336117, 47.607382],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'vehicles-layer',
                    opacity: 0.7
                },
                {
                    layer: 'hospital-layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'chapter-four',
            alignment: 'left',
            hidden: false,
            title: 'Chapter Four',
            image: '',
            description: '',
            legend: false,
            chartdata: [
                {group: "1-Person", value: 351},
                {group: "2-Person", value: 139},
                {group: "3-Person", value: 0},
                {group: "4-Person", value: 70}
            ],
            location: {
                center: [-122.364190, 47.578536],  
                zoom: 12.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 1
                },
                 {
                     layer: 'vehicles-layer',
                     opacity: 1
                 },
                {
                    layer: 'hospital-layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                },
                 {
                     layer: 'vehicles-layer',
                     opacity: 0
                 },
                {
                    layer: 'hospital-layer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'conclusion',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: '',
            legend: false,
            location: {
                center: [-120.376352, 47.410658],  
                zoom: 6, 
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                },
                 {
                     layer: 'vehicles-layer',
                     opacity: 0
                 },
                {
                    layer: 'hospital-layer',
                    opacity: 0
                }
            ],
        }
    ]
};