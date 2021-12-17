
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { 
  VictoryPie, VictoryArea, VictoryChart,
  VictoryLine,VictoryTheme,VictoryStack ,
  VictoryAxis,
  VictoryScatter,
  VictoryBar,
  VictoryLabel
} from "victory-native";

const App = () => {



  return (
    <SafeAreaView>
      <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
      <VictoryPie
        height={200}
        width={200}
        responsive={false}
          data={[
            { x: "1", y: 41},
            { x: "2", y: 33 },
            { x: "3", y: 40 },
            { x: "4", y: 30 },
            { x: "5", y: 25 }
          ]}
          labelRadius={({ innerRadius }) => innerRadius + 5 }
          radius={({ datum }) => 2 + datum.y * 2 }
          animate={{
            duration: 2000
          }}
          innerRadius={20}
          style={{ labels: { fill: "#fff", fontSize: 15 } }}
        />
       <View style={{width: 200,
         height: 200, 
         justifyContent:'center',
         padding: 16
         }}>
          <Text>Pie Chart</Text>
          <Text>1 : ST01</Text>
          <Text>2 : ST02</Text>
          <Text>3 : ST03</Text>
          <Text>4 : ST04</Text>
          <Text>5 : ST05</Text>
       </View>
      </View>

      <VictoryChart>
        <VictoryAxis
          style={{
            axis: {stroke: "#fff"},
            axisLabel: {fontSize: 0, padding: 30, color:'#fff'},
            tickLabels: {fontSize: 0, padding: 5, color:'#fff', fill: "none" }
          }}
        />
            
        <VictoryArea
          style={{
            data: { fill:'rgba(166, 206, 227, 0.3)',stroke:'rgba(166, 206, 227, 1)', strokeWidth: 2,  }
          }}
          data={[
            {x: 0, y: 4}, 
            {x: 1, y: 4}, 
            {x: 2, y: 5},
            {x: 3, y: 6}, 
            {x: 4, y: 6}, 
            {x: 5, y: 7},
            {x: 6, y: 8}, 
            {x: 7, y: 9}, 
            {x: 8, y: 8},
            {x: 9, y: 9}, 
            {x: 10, y: 8}, 
            {x: 11, y: 9},
            {x: 12, y: 10}, 
            {x: 13, y: 10}, 
            {x: 14, y: 12},
            {x: 15, y: 13}, 
            {x: 16, y: 13}, 
            {x: 17, y: 14},
            {x: 18, y: 14}, 
            {x: 19, y: 15}, 
            {x: 20, y: 16},
            {x: 21, y: 16}, 
            {x: 22, y: 17}, 
            {x: 23, y: 17}
          ]}
        />
        <VictoryScatter
          style={{ data: { fill: 'rgba(166, 206, 227, 1)' } }}
          size={2.5}
          data={[
            // {x: 0, y: 4}, 
            {x: 1, y: 4}, 
            {x: 2, y: 5},
            {x: 3, y: 6}, 
            {x: 4, y: 6}, 
            {x: 5, y: 7},
            {x: 6, y: 8}, 
            {x: 7, y: 9}, 
            {x: 8, y: 8},
            {x: 9, y: 9}, 
            {x: 10, y: 8}, 
            {x: 11, y: 9},
            {x: 12, y: 10}, 
            {x: 13, y: 10}, 
            {x: 14, y: 12},
            {x: 15, y: 13}, 
            {x: 16, y: 13}, 
            {x: 17, y: 14},
            {x: 18, y: 14}, 
            {x: 19, y: 15}, 
            {x: 20, y: 16},
            {x: 21, y: 16}, 
            {x: 22, y: 17}, 
            // {x: 23, y: 17}
          ]}
        />

        <VictoryArea
          style={{
            data: { fill: 'rgba(166, 206, 227, 1)',stroke:'rgba(31, 120, 180, 1)', strokeWidth: 2, },
          }}
      
          data={[
            {x: 0, y: 2}, 
            {x: 1, y: 2}, 
            {x: 2, y: 3},
            {x: 3, y: 4}, 
            {x: 4, y: 5}, 
            {x: 5, y: 5},
            {x: 6, y: 6}, 
            {x: 7, y: 6}, 
            {x: 8, y: 7},
            {x: 9, y: 7}, 
            {x: 10, y: 7}, 
            {x: 11, y: 8},
            {x: 12, y: 9}, 
            {x: 13, y: 9}, 
            {x: 14, y: 10},
            {x: 15, y: 10}, 
            // {x: 16, y: 13}, 
            // {x: 17, y: 14},
            // {x: 18, y: 14}, 
            // {x: 19, y: 15}, 
            // {x: 20, y: 16},
            // {x: 21, y: 16}, 
            // {x: 22, y: 17}, 
            // {x: 23, y: 17}
          ]}
        />
        <VictoryScatter
          style={{ data: { fill: "rgba(31, 120, 180, 1)"} }}
          size={2.5}
          data={[
            // {x: 0, y: 2}, 
            {x: 1, y: 2}, 
            {x: 2, y: 3},
            {x: 3, y: 4}, 
            {x: 4, y: 5}, 
            {x: 5, y: 5},
            {x: 6, y: 6}, 
            {x: 7, y: 6}, 
            {x: 8, y: 7},
            {x: 9, y: 7}, 
            {x: 10, y: 7}, 
            {x: 11, y: 8},
            {x: 12, y: 9}, 
            {x: 13, y: 9}, 
            {x: 14, y: 10},
            {x: 15, y: 10}, 
          ]}
        />

          <VictoryAxis
           dependentAxis
                key={1}
                style={{ 
                  tickLabels: { fill: "none" },
                  axis: {stroke: "red"},
                  axisLabel: {fontSize: 15, padding: 5},
                 }}
                axisValue={17}
              />

            <VictoryScatter
              size={0}
              style={{ data: { fill: "red"} }}
              data={[{ x: 17, y: 17 }]}
              labels="Hôm nay"
            />

      </VictoryChart>    
    
      
    </SafeAreaView>
  );
};


export default App;
