var apiUrl = location.protocol + '//' + location.host + location.pathname + "api/";

$(document).ready(function() {

  $(".s-app-body").hide();
  updateCustomerIds();
});


function updateCustomerIds() {

  $.get(apiUrl + 'getcustomerids', function(data) {
      $('.choose-customer select').html(function() {
          var str = '<option value="" disabled="" selected="">[choose customer id]</option>';
          var customerIds = JSON.parse(data)
          console.log(customerIds)
          for (var i = 0; i < customerIds.length; i++) {
            str = str + '<option>' + customerIds[i] + '</option>';
          }
          console.log("str: " + str)
          return str;
      });
  });
}


$('.retrieve-customer').click(function() {
  $(".s-app-body").hide();
  updateCustomer();
});


function updateCustomer() {

  var formCustomerId = $('.choose-customer select').find(":selected").text();

  //create json data
  var inputData = '{' + '"customerId" : "' + formCustomerId + '"}';

  console.log(inputData)

  //make ajax call
  $.ajax({
    type: 'POST',
    url: apiUrl + 'retrieve',
    data: inputData,
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function() {
      //display loading
      document.getElementById('loader').style.display = "block";
    },
    success: function(data) {
      //remove loader
      document.getElementById('loader').style.display = "none";

      displayClientInfo(data.clientInfo);
      displayClientLifeEvents(data.clientLifeEvents);
      displayClientAttritionScore(data.clientAttritionScore);
      displayClientSegment(data.clientExamineSegment, data.segmentDescription);
      $(".s-app-body").show();
      console.log(data)


    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("Error: Try again")
      console.log(errorThrown);
      console.log(textStatus);
      console.log(jqXHR);
    }
  });
}


function displayClientInfo(clientInfo) {

  //customer id tab
  $('.customer-id').html(function() {
    return '<div class="s-picture-profile-tile-name s-title-header customer-id" data-reactid=".0.1.2.2.0.0.0.0.1.0">' + clientInfo.customer_id + '</div>';
  });

  //location tab
  $('.geographic-area-home').html(function() {
    return '<div class="s-editable-personal-information-info s-small-body geographic-area-home" data-reactid=".0.1.2.2.0.0.0.1.1">' + clientInfo.geographic_area_home + '</div>';
  });


  //status tab
  $('.status').html(function() {
    return '<div class="s-donut-title-chart-tile-content s-small-body status" data-reactid=".0.1.2.2.0.0.0.2.1">Current status: ' + clientInfo.status + '</div>';
  });

  $('.relationship-start-date').html(function() {
    return '<div class="s-donut-title-chart-tile-content s-small-body relationship-start-date" data-reactid=".0.1.2.2.0.0.0.2.1">Client Since: ' + clientInfo.relationship_start_date + '</div>';
  });

  $('.effective-date').html(function() {
    return '<div class="s-donut-title-chart-tile-content s-small-body effective-date" data-reactid=".0.1.2.2.0.0.0.2.1">Last Update: ' + clientInfo.effective_date + '</div>';
  });

  $('.advertising-indicator').html(function() {
    return '<div class="s-donut-title-chart-tile-content s-small-body advertising-indicator" data-reactid=".0.1.2.2.0.0.0.2.1">Marketing Opt In: ' + clientInfo.advertising_indicator + '</div>';
  });

  //update additional information
  if(clientInfo.head_of_household_indicator)
  {
    document.getElementById('head-of-household-indicator').style.display = "inline";
  }

}

function displayClientLifeEvents(clientLifeEvents) {
  $('.life-events').html(function() {
    var str = ''
    for (var i = 0; i < clientLifeEvents.length; i++) {
       if (clientLifeEvents[i].score_code == "LIFE_EVENT_PREDICTION"  ) {
         var col = i * 50;
         str = str + '<div style="width:1196px;height:50px;z-index:0;transform:translate3d(0px,' + (i*50) +  'px,0);backface-visibility:hidden;" class="fixedDataTableRowLayout_rowWrapper" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0"><div class="fixedDataTableRowLayout_main public_fixedDataTableRow_main public_fixedDataTableRow_even public_fixedDataTable_bodyRow" style="width:1196px;height:50px;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0"><div class="fixedDataTableRowLayout_body" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0"><div style="height:50px;left:0;" class="fixedDataTableCellGroupLayout_cellGroupWrapper" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells"><div class="fixedDataTableCellGroupLayout_cellGroup" style="height:50px;position:absolute;width:1120px;z-index:2;transform:translate3d(0px,0px,0);backface-visibility:hidden;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0"><div class=fixedDataTableCellLayout_main public_fixedDataTableCell_main" style="height:50px;width:160px;left:0;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_0"><div class="fixedDataTableCellLayout_wrap1 public_fixedDataTableCell_wrap1 s-table-data" style="height:50px;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_0.1"><div class="fixedDataTableCellLayout_wrap2 public_fixedDataTableCell_wrap2" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_0.1.0"><div class="fixedDataTableCellLayout_wrap3 public_fixedDataTableCell_wrap3" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_0.1.0.0"><div class="public_fixedDataTableCell_cellContent" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_0.1.0.0.0">' + clientLifeEvents[i].effective_date + '</div></div></div></div></div><div class="fixedDataTableCellLayout_main public_fixedDataTableCell_main" style="height:50px;width:260px;left:160px;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_1"><div class="fixedDataTableCellLayout_wrap1 public_fixedDataTableCell_wrap1 s-table-data" style="height:50px;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_1.1"><div class="fixedDataTableCellLayout_wrap2 public_fixedDataTableCell_wrap2" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_1.1.0"><div class="fixedDataTableCellLayout_wrap3 public_fixedDataTableCell_wrap3" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_1.1.0.0"><div class="public_fixedDataTableCell_cellContent" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_1.1.0.0.0">' + clientLifeEvents[i].event_type_id + '</div></div></div></div></div><div class="fixedDataTableCellLayout_main public_fixedDataTableCell_main" style="height:50px;width:600px;left:420px;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_2"><div class="fixedDataTableCellLayout_wrap1 public_fixedDataTableCell_wrap1 s-table-data" style="height:50px;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_2.1"><div class="fixedDataTableCellLayout_wrap2 public_fixedDataTableCell_wrap2" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_2.1.0"><div class="fixedDataTableCellLayout_wrap3 public_fixedDataTableCell_wrap3" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_2.1.0.0"><div class="public_fixedDataTableCell_cellContent" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_2.1.0.0.0"><div class="s-life-events-action" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$fixed_cells.0.$cell_2.1.0.0.0.$0">' + clientLifeEvents[i].score_value + '</div></div></div></div></div></div></div></div><div style="height:50px;left:1120px;" class="fixedDataTableCellGroupLayout_cellGroupWrapper" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$scrollable_cells"><div class="fixedDataTableCellGroupLayout_cellGroup" style="height:50px;position:absolute;width:0;z-index:0;transform:translate3d(0px,0px,0);backface-visibility:hidden;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.$scrollable_cells.0"></div></div><div class="fixedDataTableRowLayout_fixedColumnsDivider public_fixedDataTableRow_fixedColumnsDivider" style="left:1120px;height:50px;" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.0.0.2.0.0.3.$0.0.0.2"></div></div></div></div>';
       }
    }
    return str;
  });

}


function displayClientAttritionScore(clientAttritionScore) {

  //attrition score
  score = clientAttritionScore.score_value * 100;
  $('.attrition-score').html(function() {
    return '<div class="s-li-icon s-li-icon-text li-icon-color-blue attrition-score" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.0.0.0.4.$0.2.0">' + score + '%</div>';
  });

  //features
  $('.feature').html(function() {
    return '<li class="s-li-description-list-item s-small-body feature" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.0.0.0.4.$0.2.1.1.2.$0"></li><li class="s-li-description-list-item s-small-body feature" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.0.0.0.4.$0.2.1.1.2.$0">' + clientAttritionScore.feature_1_column + '</li><li class="s-li-description-list-item s-small-body feature" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.0.0.0.4.$0.2.1.1.2.$0">' + clientAttritionScore.feature_2_column + '</li><li class="s-li-description-list-item s-small-body feature" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.0.0.0.4.$0.2.1.1.2.$0">' + clientAttritionScore.feature_3_column + '</li>';
  });
}

function displayClientSegment(clientExamineSegment, segmentDescription) {

  clientSegmentId = clientExamineSegment.segment_id;
  segmentCount = 0;

  str = '';
  for (var i = 0; i < segmentDescription.length; i++) {

    if (segmentDescription[i].segment_id == clientSegmentId  ) {
      segmentCount++;
      str = str + '<li class="s-segments-list-item-container s-small-body" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.2.0.4.$1"><div class="s-icon-column" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.2.0.4.$1.0"></div><div class="s-body-column" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.2.0.4.$1.1"><div class="s-segments-list-item-content" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.2.0.4.$1.1.0"><div class="s-segments-list-item-name s-big-body-semi-bold" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.2.0.4.$1.1.0.0">' + segmentDescription[i].column_name + '<br />min: ' + segmentDescription[i].min_value + '<br />max: ' + segmentDescription[i].max_value + '</div><div class="s-segments-list-item-date s-title" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.2.0.4.$1.1.0.1">Added ' + segmentDescription[i].effective_date + '</div><div class="s-segments-list-item-date s-title" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.2.0.4.$1.1.0.1">Rank: ' + segmentDescription[i].rank + '</div></div></div></li>'
    }
  }

  $('.segment-header').html(function() {
    return '<div class="s-list-container-item s-title-header s-list-title-container" data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.2.0.0"><span data-reactid=".0.1.2.2.1.0.0.0.$0/=11=2$0.0.1.2.0.0.1">Current Segments (' + segmentCount + ')</span></div>';
  });

  $('.segments').html(function() {
    return str;
  });

}
