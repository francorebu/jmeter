/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 588.0, "minX": 0.0, "maxY": 6060.0, "series": [{"data": [[0.0, 588.0], [0.1, 589.0], [0.2, 591.0], [0.3, 593.0], [0.4, 600.0], [0.5, 602.0], [0.6, 603.0], [0.7, 604.0], [0.8, 605.0], [0.9, 606.0], [1.0, 611.0], [1.1, 611.0], [1.2, 612.0], [1.3, 616.0], [1.4, 616.0], [1.5, 617.0], [1.6, 618.0], [1.7, 618.0], [1.8, 618.0], [1.9, 618.0], [2.0, 621.0], [2.1, 621.0], [2.2, 621.0], [2.3, 621.0], [2.4, 622.0], [2.5, 623.0], [2.6, 624.0], [2.7, 624.0], [2.8, 624.0], [2.9, 625.0], [3.0, 628.0], [3.1, 628.0], [3.2, 629.0], [3.3, 629.0], [3.4, 629.0], [3.5, 630.0], [3.6, 630.0], [3.7, 630.0], [3.8, 630.0], [3.9, 631.0], [4.0, 631.0], [4.1, 631.0], [4.2, 632.0], [4.3, 633.0], [4.4, 634.0], [4.5, 635.0], [4.6, 635.0], [4.7, 635.0], [4.8, 635.0], [4.9, 636.0], [5.0, 637.0], [5.1, 637.0], [5.2, 637.0], [5.3, 638.0], [5.4, 638.0], [5.5, 638.0], [5.6, 639.0], [5.7, 639.0], [5.8, 639.0], [5.9, 639.0], [6.0, 639.0], [6.1, 639.0], [6.2, 640.0], [6.3, 641.0], [6.4, 641.0], [6.5, 642.0], [6.6, 642.0], [6.7, 642.0], [6.8, 642.0], [6.9, 642.0], [7.0, 643.0], [7.1, 643.0], [7.2, 643.0], [7.3, 643.0], [7.4, 643.0], [7.5, 645.0], [7.6, 645.0], [7.7, 645.0], [7.8, 645.0], [7.9, 646.0], [8.0, 646.0], [8.1, 646.0], [8.2, 646.0], [8.3, 646.0], [8.4, 646.0], [8.5, 646.0], [8.6, 646.0], [8.7, 647.0], [8.8, 647.0], [8.9, 647.0], [9.0, 647.0], [9.1, 647.0], [9.2, 647.0], [9.3, 649.0], [9.4, 649.0], [9.5, 649.0], [9.6, 649.0], [9.7, 649.0], [9.8, 649.0], [9.9, 649.0], [10.0, 650.0], [10.1, 650.0], [10.2, 651.0], [10.3, 652.0], [10.4, 652.0], [10.5, 652.0], [10.6, 653.0], [10.7, 653.0], [10.8, 653.0], [10.9, 654.0], [11.0, 654.0], [11.1, 654.0], [11.2, 655.0], [11.3, 655.0], [11.4, 656.0], [11.5, 656.0], [11.6, 656.0], [11.7, 656.0], [11.8, 656.0], [11.9, 657.0], [12.0, 657.0], [12.1, 657.0], [12.2, 658.0], [12.3, 658.0], [12.4, 658.0], [12.5, 658.0], [12.6, 659.0], [12.7, 659.0], [12.8, 659.0], [12.9, 660.0], [13.0, 661.0], [13.1, 662.0], [13.2, 662.0], [13.3, 662.0], [13.4, 662.0], [13.5, 662.0], [13.6, 663.0], [13.7, 663.0], [13.8, 663.0], [13.9, 664.0], [14.0, 664.0], [14.1, 664.0], [14.2, 664.0], [14.3, 665.0], [14.4, 665.0], [14.5, 666.0], [14.6, 666.0], [14.7, 666.0], [14.8, 666.0], [14.9, 667.0], [15.0, 667.0], [15.1, 667.0], [15.2, 668.0], [15.3, 668.0], [15.4, 668.0], [15.5, 669.0], [15.6, 669.0], [15.7, 669.0], [15.8, 669.0], [15.9, 669.0], [16.0, 670.0], [16.1, 670.0], [16.2, 670.0], [16.3, 670.0], [16.4, 671.0], [16.5, 671.0], [16.6, 671.0], [16.7, 671.0], [16.8, 672.0], [16.9, 672.0], [17.0, 672.0], [17.1, 672.0], [17.2, 673.0], [17.3, 673.0], [17.4, 673.0], [17.5, 674.0], [17.6, 674.0], [17.7, 674.0], [17.8, 675.0], [17.9, 675.0], [18.0, 675.0], [18.1, 676.0], [18.2, 677.0], [18.3, 677.0], [18.4, 677.0], [18.5, 677.0], [18.6, 678.0], [18.7, 678.0], [18.8, 679.0], [18.9, 679.0], [19.0, 679.0], [19.1, 679.0], [19.2, 679.0], [19.3, 680.0], [19.4, 680.0], [19.5, 680.0], [19.6, 681.0], [19.7, 681.0], [19.8, 681.0], [19.9, 681.0], [20.0, 682.0], [20.1, 682.0], [20.2, 682.0], [20.3, 682.0], [20.4, 682.0], [20.5, 682.0], [20.6, 682.0], [20.7, 683.0], [20.8, 683.0], [20.9, 683.0], [21.0, 683.0], [21.1, 683.0], [21.2, 684.0], [21.3, 684.0], [21.4, 685.0], [21.5, 685.0], [21.6, 685.0], [21.7, 685.0], [21.8, 685.0], [21.9, 686.0], [22.0, 686.0], [22.1, 687.0], [22.2, 687.0], [22.3, 687.0], [22.4, 687.0], [22.5, 687.0], [22.6, 688.0], [22.7, 688.0], [22.8, 688.0], [22.9, 688.0], [23.0, 689.0], [23.1, 689.0], [23.2, 689.0], [23.3, 690.0], [23.4, 690.0], [23.5, 690.0], [23.6, 691.0], [23.7, 691.0], [23.8, 691.0], [23.9, 691.0], [24.0, 691.0], [24.1, 692.0], [24.2, 692.0], [24.3, 693.0], [24.4, 693.0], [24.5, 693.0], [24.6, 693.0], [24.7, 693.0], [24.8, 693.0], [24.9, 694.0], [25.0, 694.0], [25.1, 694.0], [25.2, 694.0], [25.3, 694.0], [25.4, 695.0], [25.5, 695.0], [25.6, 695.0], [25.7, 695.0], [25.8, 695.0], [25.9, 696.0], [26.0, 696.0], [26.1, 696.0], [26.2, 697.0], [26.3, 697.0], [26.4, 697.0], [26.5, 697.0], [26.6, 698.0], [26.7, 698.0], [26.8, 698.0], [26.9, 698.0], [27.0, 698.0], [27.1, 699.0], [27.2, 699.0], [27.3, 699.0], [27.4, 699.0], [27.5, 699.0], [27.6, 699.0], [27.7, 700.0], [27.8, 700.0], [27.9, 700.0], [28.0, 700.0], [28.1, 700.0], [28.2, 700.0], [28.3, 701.0], [28.4, 701.0], [28.5, 701.0], [28.6, 702.0], [28.7, 702.0], [28.8, 703.0], [28.9, 703.0], [29.0, 703.0], [29.1, 703.0], [29.2, 704.0], [29.3, 704.0], [29.4, 704.0], [29.5, 704.0], [29.6, 705.0], [29.7, 705.0], [29.8, 706.0], [29.9, 706.0], [30.0, 706.0], [30.1, 707.0], [30.2, 707.0], [30.3, 707.0], [30.4, 707.0], [30.5, 708.0], [30.6, 708.0], [30.7, 709.0], [30.8, 709.0], [30.9, 709.0], [31.0, 709.0], [31.1, 710.0], [31.2, 710.0], [31.3, 710.0], [31.4, 711.0], [31.5, 711.0], [31.6, 711.0], [31.7, 712.0], [31.8, 713.0], [31.9, 713.0], [32.0, 714.0], [32.1, 714.0], [32.2, 714.0], [32.3, 715.0], [32.4, 716.0], [32.5, 716.0], [32.6, 716.0], [32.7, 716.0], [32.8, 716.0], [32.9, 716.0], [33.0, 717.0], [33.1, 717.0], [33.2, 717.0], [33.3, 718.0], [33.4, 719.0], [33.5, 719.0], [33.6, 720.0], [33.7, 721.0], [33.8, 722.0], [33.9, 722.0], [34.0, 722.0], [34.1, 722.0], [34.2, 723.0], [34.3, 723.0], [34.4, 724.0], [34.5, 725.0], [34.6, 725.0], [34.7, 725.0], [34.8, 726.0], [34.9, 727.0], [35.0, 727.0], [35.1, 727.0], [35.2, 728.0], [35.3, 729.0], [35.4, 729.0], [35.5, 730.0], [35.6, 730.0], [35.7, 730.0], [35.8, 730.0], [35.9, 730.0], [36.0, 730.0], [36.1, 732.0], [36.2, 732.0], [36.3, 733.0], [36.4, 733.0], [36.5, 733.0], [36.6, 734.0], [36.7, 734.0], [36.8, 735.0], [36.9, 735.0], [37.0, 735.0], [37.1, 736.0], [37.2, 736.0], [37.3, 737.0], [37.4, 737.0], [37.5, 737.0], [37.6, 738.0], [37.7, 738.0], [37.8, 739.0], [37.9, 740.0], [38.0, 740.0], [38.1, 740.0], [38.2, 740.0], [38.3, 741.0], [38.4, 741.0], [38.5, 742.0], [38.6, 742.0], [38.7, 743.0], [38.8, 743.0], [38.9, 743.0], [39.0, 743.0], [39.1, 743.0], [39.2, 744.0], [39.3, 744.0], [39.4, 745.0], [39.5, 745.0], [39.6, 746.0], [39.7, 746.0], [39.8, 747.0], [39.9, 748.0], [40.0, 748.0], [40.1, 748.0], [40.2, 749.0], [40.3, 749.0], [40.4, 749.0], [40.5, 750.0], [40.6, 750.0], [40.7, 750.0], [40.8, 751.0], [40.9, 751.0], [41.0, 753.0], [41.1, 753.0], [41.2, 754.0], [41.3, 754.0], [41.4, 755.0], [41.5, 756.0], [41.6, 757.0], [41.7, 757.0], [41.8, 758.0], [41.9, 758.0], [42.0, 759.0], [42.1, 759.0], [42.2, 759.0], [42.3, 760.0], [42.4, 760.0], [42.5, 760.0], [42.6, 761.0], [42.7, 761.0], [42.8, 762.0], [42.9, 762.0], [43.0, 762.0], [43.1, 763.0], [43.2, 763.0], [43.3, 764.0], [43.4, 765.0], [43.5, 767.0], [43.6, 767.0], [43.7, 768.0], [43.8, 768.0], [43.9, 769.0], [44.0, 769.0], [44.1, 769.0], [44.2, 770.0], [44.3, 771.0], [44.4, 771.0], [44.5, 773.0], [44.6, 773.0], [44.7, 774.0], [44.8, 775.0], [44.9, 775.0], [45.0, 776.0], [45.1, 776.0], [45.2, 778.0], [45.3, 778.0], [45.4, 779.0], [45.5, 780.0], [45.6, 780.0], [45.7, 781.0], [45.8, 781.0], [45.9, 782.0], [46.0, 784.0], [46.1, 784.0], [46.2, 784.0], [46.3, 784.0], [46.4, 785.0], [46.5, 785.0], [46.6, 787.0], [46.7, 787.0], [46.8, 787.0], [46.9, 787.0], [47.0, 788.0], [47.1, 788.0], [47.2, 788.0], [47.3, 789.0], [47.4, 789.0], [47.5, 789.0], [47.6, 790.0], [47.7, 791.0], [47.8, 792.0], [47.9, 794.0], [48.0, 794.0], [48.1, 797.0], [48.2, 799.0], [48.3, 800.0], [48.4, 802.0], [48.5, 803.0], [48.6, 803.0], [48.7, 804.0], [48.8, 805.0], [48.9, 805.0], [49.0, 806.0], [49.1, 807.0], [49.2, 808.0], [49.3, 809.0], [49.4, 810.0], [49.5, 812.0], [49.6, 812.0], [49.7, 813.0], [49.8, 815.0], [49.9, 815.0], [50.0, 815.0], [50.1, 815.0], [50.2, 816.0], [50.3, 816.0], [50.4, 816.0], [50.5, 816.0], [50.6, 819.0], [50.7, 819.0], [50.8, 819.0], [50.9, 820.0], [51.0, 820.0], [51.1, 820.0], [51.2, 820.0], [51.3, 820.0], [51.4, 822.0], [51.5, 823.0], [51.6, 824.0], [51.7, 825.0], [51.8, 825.0], [51.9, 825.0], [52.0, 826.0], [52.1, 826.0], [52.2, 830.0], [52.3, 830.0], [52.4, 831.0], [52.5, 832.0], [52.6, 832.0], [52.7, 832.0], [52.8, 833.0], [52.9, 833.0], [53.0, 833.0], [53.1, 833.0], [53.2, 833.0], [53.3, 834.0], [53.4, 835.0], [53.5, 835.0], [53.6, 836.0], [53.7, 836.0], [53.8, 838.0], [53.9, 840.0], [54.0, 841.0], [54.1, 841.0], [54.2, 841.0], [54.3, 842.0], [54.4, 842.0], [54.5, 844.0], [54.6, 844.0], [54.7, 846.0], [54.8, 846.0], [54.9, 849.0], [55.0, 849.0], [55.1, 851.0], [55.2, 851.0], [55.3, 854.0], [55.4, 855.0], [55.5, 855.0], [55.6, 855.0], [55.7, 855.0], [55.8, 855.0], [55.9, 856.0], [56.0, 857.0], [56.1, 858.0], [56.2, 858.0], [56.3, 858.0], [56.4, 859.0], [56.5, 861.0], [56.6, 863.0], [56.7, 864.0], [56.8, 864.0], [56.9, 864.0], [57.0, 865.0], [57.1, 865.0], [57.2, 868.0], [57.3, 868.0], [57.4, 868.0], [57.5, 868.0], [57.6, 869.0], [57.7, 870.0], [57.8, 873.0], [57.9, 876.0], [58.0, 877.0], [58.1, 877.0], [58.2, 878.0], [58.3, 879.0], [58.4, 880.0], [58.5, 880.0], [58.6, 882.0], [58.7, 884.0], [58.8, 884.0], [58.9, 885.0], [59.0, 886.0], [59.1, 890.0], [59.2, 890.0], [59.3, 893.0], [59.4, 893.0], [59.5, 894.0], [59.6, 894.0], [59.7, 897.0], [59.8, 897.0], [59.9, 901.0], [60.0, 901.0], [60.1, 902.0], [60.2, 903.0], [60.3, 908.0], [60.4, 909.0], [60.5, 909.0], [60.6, 914.0], [60.7, 914.0], [60.8, 915.0], [60.9, 918.0], [61.0, 920.0], [61.1, 920.0], [61.2, 921.0], [61.3, 921.0], [61.4, 922.0], [61.5, 925.0], [61.6, 927.0], [61.7, 927.0], [61.8, 928.0], [61.9, 929.0], [62.0, 931.0], [62.1, 932.0], [62.2, 938.0], [62.3, 939.0], [62.4, 939.0], [62.5, 941.0], [62.6, 949.0], [62.7, 950.0], [62.8, 951.0], [62.9, 953.0], [63.0, 956.0], [63.1, 957.0], [63.2, 959.0], [63.3, 961.0], [63.4, 964.0], [63.5, 967.0], [63.6, 972.0], [63.7, 975.0], [63.8, 975.0], [63.9, 978.0], [64.0, 981.0], [64.1, 983.0], [64.2, 987.0], [64.3, 988.0], [64.4, 997.0], [64.5, 997.0], [64.6, 999.0], [64.7, 1000.0], [64.8, 1006.0], [64.9, 1006.0], [65.0, 1008.0], [65.1, 1012.0], [65.2, 1012.0], [65.3, 1013.0], [65.4, 1013.0], [65.5, 1018.0], [65.6, 1023.0], [65.7, 1026.0], [65.8, 1028.0], [65.9, 1040.0], [66.0, 1045.0], [66.1, 1046.0], [66.2, 1047.0], [66.3, 1052.0], [66.4, 1052.0], [66.5, 1059.0], [66.6, 1062.0], [66.7, 1064.0], [66.8, 1065.0], [66.9, 1067.0], [67.0, 1072.0], [67.1, 1074.0], [67.2, 1075.0], [67.3, 1077.0], [67.4, 1082.0], [67.5, 1083.0], [67.6, 1084.0], [67.7, 1084.0], [67.8, 1090.0], [67.9, 1104.0], [68.0, 1107.0], [68.1, 1134.0], [68.2, 1143.0], [68.3, 1145.0], [68.4, 1155.0], [68.5, 1163.0], [68.6, 1168.0], [68.7, 1168.0], [68.8, 1173.0], [68.9, 1189.0], [69.0, 1197.0], [69.1, 1201.0], [69.2, 1213.0], [69.3, 1218.0], [69.4, 1223.0], [69.5, 1227.0], [69.6, 1228.0], [69.7, 1229.0], [69.8, 1229.0], [69.9, 1231.0], [70.0, 1233.0], [70.1, 1238.0], [70.2, 1242.0], [70.3, 1243.0], [70.4, 1245.0], [70.5, 1252.0], [70.6, 1254.0], [70.7, 1256.0], [70.8, 1261.0], [70.9, 1264.0], [71.0, 1267.0], [71.1, 1267.0], [71.2, 1268.0], [71.3, 1271.0], [71.4, 1272.0], [71.5, 1276.0], [71.6, 1280.0], [71.7, 1282.0], [71.8, 1292.0], [71.9, 1295.0], [72.0, 1297.0], [72.1, 1305.0], [72.2, 1308.0], [72.3, 1310.0], [72.4, 1312.0], [72.5, 1313.0], [72.6, 1323.0], [72.7, 1345.0], [72.8, 1348.0], [72.9, 1352.0], [73.0, 1359.0], [73.1, 1363.0], [73.2, 1370.0], [73.3, 1374.0], [73.4, 1383.0], [73.5, 1383.0], [73.6, 1385.0], [73.7, 1385.0], [73.8, 1390.0], [73.9, 1393.0], [74.0, 1395.0], [74.1, 1396.0], [74.2, 1397.0], [74.3, 1401.0], [74.4, 1403.0], [74.5, 1409.0], [74.6, 1418.0], [74.7, 1421.0], [74.8, 1423.0], [74.9, 1428.0], [75.0, 1436.0], [75.1, 1453.0], [75.2, 1460.0], [75.3, 1461.0], [75.4, 1462.0], [75.5, 1469.0], [75.6, 1470.0], [75.7, 1475.0], [75.8, 1482.0], [75.9, 1483.0], [76.0, 1484.0], [76.1, 1493.0], [76.2, 1494.0], [76.3, 1498.0], [76.4, 1510.0], [76.5, 1514.0], [76.6, 1525.0], [76.7, 1527.0], [76.8, 1531.0], [76.9, 1537.0], [77.0, 1544.0], [77.1, 1554.0], [77.2, 1558.0], [77.3, 1558.0], [77.4, 1559.0], [77.5, 1564.0], [77.6, 1578.0], [77.7, 1586.0], [77.8, 1588.0], [77.9, 1590.0], [78.0, 1594.0], [78.1, 1599.0], [78.2, 1606.0], [78.3, 1607.0], [78.4, 1612.0], [78.5, 1612.0], [78.6, 1616.0], [78.7, 1632.0], [78.8, 1632.0], [78.9, 1633.0], [79.0, 1638.0], [79.1, 1641.0], [79.2, 1646.0], [79.3, 1648.0], [79.4, 1649.0], [79.5, 1649.0], [79.6, 1665.0], [79.7, 1665.0], [79.8, 1667.0], [79.9, 1670.0], [80.0, 1671.0], [80.1, 1676.0], [80.2, 1688.0], [80.3, 1700.0], [80.4, 1701.0], [80.5, 1705.0], [80.6, 1706.0], [80.7, 1717.0], [80.8, 1719.0], [80.9, 1721.0], [81.0, 1722.0], [81.1, 1723.0], [81.2, 1724.0], [81.3, 1730.0], [81.4, 1736.0], [81.5, 1739.0], [81.6, 1739.0], [81.7, 1742.0], [81.8, 1743.0], [81.9, 1744.0], [82.0, 1745.0], [82.1, 1745.0], [82.2, 1747.0], [82.3, 1748.0], [82.4, 1749.0], [82.5, 1753.0], [82.6, 1753.0], [82.7, 1757.0], [82.8, 1761.0], [82.9, 1765.0], [83.0, 1767.0], [83.1, 1769.0], [83.2, 1771.0], [83.3, 1776.0], [83.4, 1777.0], [83.5, 1778.0], [83.6, 1779.0], [83.7, 1781.0], [83.8, 1787.0], [83.9, 1789.0], [84.0, 1790.0], [84.1, 1800.0], [84.2, 1801.0], [84.3, 1810.0], [84.4, 1813.0], [84.5, 1813.0], [84.6, 1816.0], [84.7, 1818.0], [84.8, 1821.0], [84.9, 1826.0], [85.0, 1826.0], [85.1, 1830.0], [85.2, 1831.0], [85.3, 1831.0], [85.4, 1838.0], [85.5, 1838.0], [85.6, 1841.0], [85.7, 1847.0], [85.8, 1860.0], [85.9, 1862.0], [86.0, 1863.0], [86.1, 1866.0], [86.2, 1874.0], [86.3, 1874.0], [86.4, 1878.0], [86.5, 1891.0], [86.6, 1915.0], [86.7, 1919.0], [86.8, 1921.0], [86.9, 1924.0], [87.0, 1931.0], [87.1, 1934.0], [87.2, 1938.0], [87.3, 1939.0], [87.4, 1941.0], [87.5, 1941.0], [87.6, 1953.0], [87.7, 1958.0], [87.8, 1960.0], [87.9, 1967.0], [88.0, 1973.0], [88.1, 1982.0], [88.2, 1984.0], [88.3, 1989.0], [88.4, 1992.0], [88.5, 1997.0], [88.6, 2000.0], [88.7, 2009.0], [88.8, 2011.0], [88.9, 2013.0], [89.0, 2017.0], [89.1, 2024.0], [89.2, 2035.0], [89.3, 2053.0], [89.4, 2054.0], [89.5, 2068.0], [89.6, 2071.0], [89.7, 2093.0], [89.8, 2094.0], [89.9, 2115.0], [90.0, 2126.0], [90.1, 2148.0], [90.2, 2161.0], [90.3, 2165.0], [90.4, 2166.0], [90.5, 2168.0], [90.6, 2183.0], [90.7, 2194.0], [90.8, 2201.0], [90.9, 2202.0], [91.0, 2215.0], [91.1, 2278.0], [91.2, 2306.0], [91.3, 2306.0], [91.4, 2341.0], [91.5, 2347.0], [91.6, 2349.0], [91.7, 2353.0], [91.8, 2366.0], [91.9, 2372.0], [92.0, 2388.0], [92.1, 2430.0], [92.2, 2430.0], [92.3, 2485.0], [92.4, 2500.0], [92.5, 2509.0], [92.6, 2609.0], [92.7, 2620.0], [92.8, 2633.0], [92.9, 2641.0], [93.0, 2653.0], [93.1, 2682.0], [93.2, 2691.0], [93.3, 2718.0], [93.4, 2767.0], [93.5, 2779.0], [93.6, 2779.0], [93.7, 2780.0], [93.8, 2804.0], [93.9, 2870.0], [94.0, 2946.0], [94.1, 2964.0], [94.2, 2965.0], [94.3, 2977.0], [94.4, 2983.0], [94.5, 3081.0], [94.6, 3090.0], [94.7, 3218.0], [94.8, 3223.0], [94.9, 3258.0], [95.0, 3259.0], [95.1, 3298.0], [95.2, 3322.0], [95.3, 3348.0], [95.4, 3405.0], [95.5, 3440.0], [95.6, 3445.0], [95.7, 3532.0], [95.8, 3534.0], [95.9, 3542.0], [96.0, 3558.0], [96.1, 3567.0], [96.2, 3577.0], [96.3, 3600.0], [96.4, 3616.0], [96.5, 3640.0], [96.6, 3710.0], [96.7, 3755.0], [96.8, 3876.0], [96.9, 3902.0], [97.0, 3920.0], [97.1, 3922.0], [97.2, 3951.0], [97.3, 3953.0], [97.4, 3964.0], [97.5, 3979.0], [97.6, 4063.0], [97.7, 4091.0], [97.8, 4202.0], [97.9, 4229.0], [98.0, 4261.0], [98.1, 4278.0], [98.2, 4317.0], [98.3, 4461.0], [98.4, 4471.0], [98.5, 4499.0], [98.6, 4573.0], [98.7, 4584.0], [98.8, 4600.0], [98.9, 4626.0], [99.0, 4689.0], [99.1, 4705.0], [99.2, 4721.0], [99.3, 4735.0], [99.4, 4841.0], [99.5, 4902.0], [99.6, 4937.0], [99.7, 4945.0], [99.8, 4981.0], [99.9, 5312.0], [100.0, 6060.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 317.0, "series": [{"data": [[600.0, 317.0], [700.0, 239.0], [800.0, 135.0], [900.0, 56.0], [1000.0, 37.0], [1100.0, 14.0], [1200.0, 35.0], [1300.0, 25.0], [1400.0, 24.0], [1500.0, 21.0], [1600.0, 25.0], [1700.0, 44.0], [1800.0, 29.0], [1900.0, 23.0], [2000.0, 15.0], [2100.0, 11.0], [2300.0, 11.0], [2200.0, 4.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 8.0], [2700.0, 6.0], [2800.0, 2.0], [2900.0, 5.0], [3000.0, 3.0], [3200.0, 6.0], [3300.0, 2.0], [3400.0, 4.0], [3500.0, 7.0], [3700.0, 2.0], [3600.0, 3.0], [3800.0, 2.0], [3900.0, 7.0], [4000.0, 3.0], [4300.0, 2.0], [4200.0, 4.0], [4400.0, 3.0], [4500.0, 3.0], [4600.0, 3.0], [4700.0, 4.0], [4800.0, 1.0], [4900.0, 4.0], [5300.0, 1.0], [6000.0, 1.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 275.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 886.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 886.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 275.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 84.90783807062871, "minX": 1.59456738E12, "maxY": 84.90783807062871, "series": [{"data": [[1.59456738E12, 84.90783807062871]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59456738E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 646.0, "minX": 1.0, "maxY": 2071.0, "series": [{"data": [[2.0, 1514.0], [3.0, 1531.0], [4.0, 1527.0], [5.0, 1493.0], [6.0, 1508.0], [7.0, 1860.0], [8.0, 1462.0], [9.0, 1753.0], [11.0, 1227.5], [12.0, 1612.0], [13.0, 1612.0], [14.0, 1268.0], [16.0, 1226.0], [17.0, 824.0], [18.0, 1632.0], [19.0, 1245.0], [20.0, 1559.0], [21.0, 1537.0], [22.0, 1397.0], [23.0, 646.0], [24.0, 664.0], [25.0, 695.0], [26.0, 665.0], [27.0, 844.0], [28.0, 803.0], [29.0, 820.0], [30.0, 806.0], [31.0, 931.0], [33.0, 760.0], [32.0, 768.0], [34.0, 705.0], [37.0, 671.0], [36.0, 826.5], [38.0, 652.0], [41.0, 654.0], [40.0, 966.5], [43.0, 1243.0], [42.0, 1231.0], [44.0, 799.0], [46.0, 777.5], [49.0, 2045.7323943661963], [51.0, 1218.0], [50.0, 1228.0], [53.0, 855.0], [52.0, 1271.0], [55.0, 833.0], [54.0, 833.0], [56.0, 890.1034482758623], [57.0, 1233.0], [59.0, 729.0], [61.0, 911.0], [60.0, 727.0], [63.0, 1107.0], [62.0, 1104.0], [67.0, 740.9130434782609], [66.0, 1084.0], [65.0, 1040.0], [64.0, 1261.0], [68.0, 1021.5], [69.0, 883.0454545454545], [71.0, 863.754716981132], [70.0, 1083.0], [72.0, 874.6428571428572], [73.0, 1096.5], [75.0, 1261.4782608695652], [74.0, 842.0], [77.0, 1106.0666666666666], [78.0, 858.0], [79.0, 911.3333333333334], [76.0, 1030.0], [80.0, 1271.1428571428573], [81.0, 1415.6666666666667], [82.0, 763.8571428571429], [83.0, 667.0], [84.0, 1172.111111111111], [87.0, 2071.0], [86.0, 909.0], [85.0, 918.0], [89.0, 768.5], [91.0, 1238.0], [90.0, 916.0], [88.0, 1163.0], [94.0, 1302.5], [95.0, 1254.75], [93.0, 1254.0], [92.0, 1075.0], [96.0, 1394.1082474226807], [97.0, 1182.8461538461536], [99.0, 1134.2], [100.0, 1180.0222222222224], [1.0, 1494.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[84.92161929371228, 1202.8001722652868]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2515.5, "minX": 1.59456738E12, "maxY": 37809.9, "series": [{"data": [[1.59456738E12, 37809.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59456738E12, 2515.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59456738E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1202.8001722652868, "minX": 1.59456738E12, "maxY": 1202.8001722652868, "series": [{"data": [[1.59456738E12, 1202.8001722652868]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59456738E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1202.0671834625305, "minX": 1.59456738E12, "maxY": 1202.0671834625305, "series": [{"data": [[1.59456738E12, 1202.0671834625305]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59456738E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 994.0938845822558, "minX": 1.59456738E12, "maxY": 994.0938845822558, "series": [{"data": [[1.59456738E12, 994.0938845822558]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59456738E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 588.0, "minX": 1.59456738E12, "maxY": 6060.0, "series": [{"data": [[1.59456738E12, 6060.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59456738E12, 588.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59456738E12, 2132.3999999999996]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59456738E12, 4695.079999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59456738E12, 3260.7999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59456738E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 680.5, "minX": 20.0, "maxY": 1511.0, "series": [{"data": [[46.0, 680.5], [54.0, 759.5], [58.0, 691.5], [60.0, 695.5], [61.0, 1052.0], [64.0, 831.5], [68.0, 840.5], [71.0, 752.0], [83.0, 740.0], [80.0, 847.5], [20.0, 1511.0], [92.0, 889.0], [96.0, 803.0], [109.0, 1213.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 109.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 680.5, "minX": 20.0, "maxY": 1511.0, "series": [{"data": [[46.0, 680.5], [54.0, 759.5], [58.0, 691.0], [60.0, 695.5], [61.0, 1052.0], [64.0, 831.0], [68.0, 840.5], [71.0, 752.0], [83.0, 740.0], [80.0, 847.5], [20.0, 1511.0], [92.0, 889.0], [96.0, 803.0], [109.0, 1212.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 109.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 19.35, "minX": 1.59456738E12, "maxY": 19.35, "series": [{"data": [[1.59456738E12, 19.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59456738E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 19.35, "minX": 1.59456738E12, "maxY": 19.35, "series": [{"data": [[1.59456738E12, 19.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59456738E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 19.35, "minX": 1.59456738E12, "maxY": 19.35, "series": [{"data": [[1.59456738E12, 19.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59456738E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 19.35, "minX": 1.59456738E12, "maxY": 19.35, "series": [{"data": [[1.59456738E12, 19.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59456738E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

