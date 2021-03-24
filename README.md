This is a POC for k6 framework, load test framework based on nodejs.

# Let's Go #
### Basic Run ###
1.	Install k6: https://k6.io/docs/getting-started/installation
2. Clone this repo 
	```git clone https://github.com/7etrahedral/k6-script.git```	
3. Go to folder 
	```cd k6-script```
4. Run script 
	```k6 run script.js```
	
### Running with InfluxDB and Grafana ###
1. Install and run Grafana https://grafana.com/docs/grafana/latest/installation/
2. Install and run InfluxDB https://archive.docs.influxdata.com/influxdb/v1.2/introduction/installation/
3. Clone this repo 
	```git clone https://github.com/7etrahedral/k6-script.git```	
3. Go to folder 
	```cd k6-script```
4. Run script 
	```k6 run influxdb=http://localhost:8086/myk6db script.js```

### Report Example Using Grafana ###
![Image of Report]
(https://github.com/7etrahedral/k6-script/blob/main/report_example/grafana_1.png)