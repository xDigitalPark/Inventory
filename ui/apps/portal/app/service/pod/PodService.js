Ext.define('VERT.Portal.service.pod.PodService', {

    retrieveConfig: function(podId) {
        var me = this,
            deferred = null,
            configStore = [];

        // temporal store.
        configStore[1] = me.getTicketVolumeGlobalConfig();
        configStore[2] = me.getOutageCorrelationRateConfig();

        deferred = Ext.create('Ext.Deferred');
        deferred.resolve(configStore[podId]);

        return deferred.promise;
    },

    retrieveData: function(dataSourceId) {
        var me = this,
            deferred = null,
            dataStore = [];

        // temporal store.
        dataStore[1] = me.getTicketVolumeGlobalData();
        dataStore[2] = me.getOutageCorrelationRateData();

        deferred = Ext.create('Ext.Deferred');
        deferred.resolve(dataStore[dataSourceId]);

        return deferred.promise;
    },

// temporal method.
    getTicketVolumeGlobalConfig: function() {
        return {
            title: 'Ticket Volume Global (one hour)',
            dataSourceId: 1,
            height: 300,
            axes: [{
                       type: 'numeric',
                       position: 'left',
                       minimum: 0,
                    minorTickSteps: 1,
                    constrain: false,
                    maximum: 50
                   }, {
                       type: 'category',
                       position: 'bottom'
                   }],
                series: [{
                   type: 'area',
                   axis: 'left',
                   xField: 'Minute',
                   yField: ['Tickets Created'],
                   title: ['Tickets Created'],
                    style: {
                        'stroke-width': 1,
                        stroke: 'rgb(148, 174, 10)'
                    },
                    renderer: function(sprite, record, attr, index, store) {
                    	var value = 0;
                        color = ['#003399'][value];

                        return Ext.apply(attr, {
                            fill: color
                        });
                    }
               }]
        }
    },

 // temporal method.
    getTicketVolumeGlobalData: function() {
        var json = {
            records:
            [{"Minute": "15:47","Tickets Created": 15},
            {"Minute": "15:48","Tickets Created": 17},
            {"Minute": "15:49","Tickets Created": 20},
            {"Minute": "15:50","Tickets Created": 25},
            {"Minute": "15:51","Tickets Created": 20},
            {"Minute": "15:52","Tickets Created": 16},
            {"Minute": "15:53","Tickets Created": 25},
            {"Minute": "15:54","Tickets Created": 25},
            {"Minute": "15:55","Tickets Created": 34},
            {"Minute": "15:56","Tickets Created": 22},
            {"Minute": "15:57","Tickets Created": 15},
            {"Minute": "15:58","Tickets Created": 24},
            {"Minute": "15:59","Tickets Created": 35},
            {"Minute": "16:00","Tickets Created": 19},
            {"Minute": "16:01","Tickets Created": 11},
            {"Minute": "16:02","Tickets Created": 20},
            {"Minute": "16:03","Tickets Created": 16},
            {"Minute": "16:04","Tickets Created": 26},
            {"Minute": "16:05","Tickets Created": 16},
            {"Minute": "16:06","Tickets Created": 15},
            {"Minute": "16:07","Tickets Created": 16},
            {"Minute": "16:08","Tickets Created": 20},
            {"Minute": "16:09","Tickets Created": 17},
            {"Minute": "16:10","Tickets Created": 23},
            {"Minute": "16:11","Tickets Created": 20},
            {"Minute": "16:12","Tickets Created": 18},
            {"Minute": "16:13","Tickets Created": 28},
            {"Minute": "16:14","Tickets Created": 20},
            {"Minute": "16:15","Tickets Created": 17},
            {"Minute": "16:16","Tickets Created": 25},
            {"Minute": "16:17","Tickets Created": 23},
            {"Minute": "16:18","Tickets Created": 30},
            {"Minute": "16:19","Tickets Created": 27},
            {"Minute": "16:20","Tickets Created": 14},
            {"Minute": "16:21","Tickets Created": 17},
            {"Minute": "16:22","Tickets Created": 18},
            {"Minute": "16:23","Tickets Created": 15},
            {"Minute": "16:24","Tickets Created": 11},
            {"Minute": "16:25","Tickets Created": 18},
            {"Minute": "16:26","Tickets Created": 16},
            {"Minute": "16:27","Tickets Created": 11},
            {"Minute": "16:28","Tickets Created": 12},
            {"Minute": "16:29","Tickets Created": 16},
            {"Minute": "16:30","Tickets Created": 8},
            {"Minute": "16:31","Tickets Created": 9},
            {"Minute": "16:32","Tickets Created": 10},
            {"Minute": "16:33","Tickets Created": 17},
            {"Minute": "16:34","Tickets Created": 18},
            {"Minute": "16:35","Tickets Created": 19},
            {"Minute": "16:36","Tickets Created": 13},
            {"Minute": "16:37","Tickets Created": 18},
            {"Minute": "16:38","Tickets Created": 13},
            {"Minute": "16:39","Tickets Created": 14},
            {"Minute": "16:40","Tickets Created": 13},
            {"Minute": "16:41","Tickets Created": 20},
            {"Minute": "16:42","Tickets Created": 15},
            {"Minute": "16:43","Tickets Created": 18},
            {"Minute": "16:44","Tickets Created": 27},
            {"Minute": "16:45","Tickets Created": 18},
            {"Minute": "16:46","Tickets Created": 20}]
        };
        return json;
    },
// temporal method.
    getOutageCorrelationRateConfig: function() {
       return {
          title: 'Outage Correlation Rate (one hour)',
          dataSourceId: 2,
          height: 300,
          axes: [{
                  type: 'numeric',
                  position: 'left',
                  minimum: 0,
                  minorTickSteps: 1,
                  constrain: false,
                  maximum: 20
             }, {
                   type: 'category',
                   position: 'bottom'
          }],
          series: [{
               type: 'area',
               axis: 'left',
               xField: 'Minute',
               yField: ['Cross Reference Rate'],
               title: ['Cross Reference Rate'],
                style: {
                    'stroke-width': 1,
                    stroke: 'rgb(148, 174, 10)'
                },
                renderer: function(sprite, record, attr, index, store) {
                  var value = 0;
                    color = ['#527A00'][value];

                    return Ext.apply(attr, {
                        fill: color
                    });
                }
           }]
          }
    },
// temporal method.
    getOutageCorrelationRateData: function() {
      var json = {
            records:
            [{
              "Minute": "20:15",
                "Cross Reference Rate": 1
            },
            {
                "Minute": "20:17",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "20:18",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "20:33",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "20:35",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "20:38",
                "Cross Reference Rate": 2
              },
              {
                "Minute": "20:39",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "20:40",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "20:43",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "20:57",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "20:58",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "21:02",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "21:04",
                "Cross Reference Rate": 1
              },
              {
                "Minute": "21:06",
                "Cross Reference Rate": 1
              }
            ]
        };
          return json;
    }



});
