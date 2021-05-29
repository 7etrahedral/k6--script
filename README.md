This is a POC for k6 framework, load test framework based on nodejs.

# Let's Go #
### Basic Run ###
1. Install k6: https://k6.io/docs/getting-started/installation
2. Clone this repo 
	```git clone https://github.com/7etrahedral/k6-script.git```	
3. Go to folder 
	```cd k6-script```
4. Copy and edit shell script
    ```cp run.sh.sample run.sh
5. Make it executable
    Linux and Mac
    ```chmod +x run.sh```
6. Run script 
	```./run.sh```
	
### Running with InfluxDB and Grafana ###
1. Install and run Grafana https://grafana.com/docs/grafana/latest/installation/
2. Install and run InfluxDB https://archive.docs.influxdata.com/influxdb/v1.2/introduction/installation/
3. Clone this repo 
	```git clone https://github.com/7etrahedral/k6-script.git```	
3. Go to folder 
	```cd k6-script```
4. Copy and edit shell script
    ```cp run.sh.sample.influxdb run.sh
5. Make it executable
    Linux and Mac
    ```chmod +x run.sh```
6. Run script
	```./run.sh```

### Report Example Using Grafana ###
![Image of Report_1!](https://github.com/7etrahedral/k6-script/blob/main/report_example/grafana_1.png)
![Image of Report_2!](https://github.com/7etrahedral/k6-script/blob/main/report_example/grafana_2.png)
