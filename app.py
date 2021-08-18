#Load in dependencies
##########################################################
from flask import render_template
import sqlalchemy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, request
import numpy as np
from sqlalchemy.sql.expression import true


#Flask Setup
#########################################################
app = Flask(__name__,
            static_url_path = '',
            static_folder = 'docs',
            template_folder = "docs")
            #just get a sample json to connect

#Postgres setup
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:haikusareb@localhost:5432/Inequality_db"
db = SQLAlchemy(app)


engine = db.engine
session = Session(engine)
Base = automap_base()
Base.prepare(db.engine, reflect=True)
inequality = Base.classes.inequality_table

##Home page where we show our dashboard
@app.route("/")
def welcome():
    return render_template("index.html")

#API Route
#############################################

@app.route("/inequality_api")
def api():
    results = session.query(
        inequality.id,
        inequality.year, 
        inequality.cpi, 
        inequality.percentage_cpi, 
        inequality.pce_food_billons_of_dollars, 
        inequality.pce_energy_goods_services_billons_of_dollars, 
        inequality.pce_food_percentage, 
        inequality.pce_energy_goods_services_billons_of_dollars, 
        inequality.gdp_billions, 
        inequality.gdp_percentage, 
        inequality.median_income,
        inequality.median_income_percentage, 
        inequality.gdp_percap, 
        inequality.gdp_percap_percentage, 
        inequality.first_percentile, 
        inequality.second_percentile,
        inequality.third_percentile,  
        inequality.fourth_percentile,
        inequality.fifth_percentile,
        inequality.top_five_percent,
        inequality.cpi_change,
	    inequality.pce_food_change,
	    inequality.pce_energy_change,
	    inequality.gdp_change,
	    inequality.median_income_change,
	    inequality.gdp_percap_change,
	    inequality.first_change,
	    inequality.second_change,
	    inequality.third_change,
	    inequality.fourth_change,
        inequality.fifth_change,
	    inequality.top_five_change).all()


    inequality_list = []
    for id, year, cpi, percentage_cpi, pce_food_billons_of_dollars, pce_energy_goods_services_billons_of_dollars, pce_food_percentage, pce_energy_goods_services_percentage, gdp_billions, gdp_percentage, median_income, median_income_percentage, gdp_percap, gdp_percap_percentage, first_percentile, second_percentile, third_percentile, fourth_percentile, fifth_percentile, top_five_percent, cpi_change, pce_food_change, pce_energy_change, gdp_change, median_income_change, gdp_percap_change, first_change, second_change, third_change, fourth_change, fifth_change, top_five_change in results:
        inequality_dict = {}
        inequality_dict['id'] = id
        inequality_dict["year"] = year
        inequality_dict["cpi"] = cpi
        inequality_dict["percentage_cpi"] = percentage_cpi
        inequality_dict["pce_food_billions_of_dollars"] = pce_food_billons_of_dollars
        inequality_dict["pce_energy_goods_services_billions_of_dollars"] = pce_energy_goods_services_billons_of_dollars
        inequality_dict["pce_food_percentage"] = pce_food_percentage
        inequality_dict["pce_energy_goods_services_percentage"] = pce_energy_goods_services_percentage
        inequality_dict["gdp_billions"] = gdp_billions
        inequality_dict["gdp_percentage"] = gdp_percentage
        inequality_dict["median_income"] = median_income
        inequality_dict["median_income_percentage"] = median_income_percentage
        inequality_dict["gdp_percap"] = gdp_percap
        inequality_dict["gdp_percap_percentage"] = gdp_percap_percentage
        inequality_dict["first_percentile"] = first_percentile
        inequality_dict["second_percentile"] = second_percentile
        inequality_dict["third_percentile"] = third_percentile
        inequality_dict["fourth_percentile"] = fourth_percentile
        inequality_dict["fifth_percentile"] = fifth_percentile
        inequality_dict["top_five_percent"] = top_five_percent
        inequality_dict["cpi_change"] = cpi_change
        inequality_dict["pce_food_change"] = pce_food_change
        inequality_dict["pce_energy_change"] = pce_energy_change
        inequality_dict["gdp_change"] = gdp_change
        inequality_dict["median_income_change"] = median_income_change
        inequality_dict["gdp_percap_change"] = gdp_percap_change
        inequality_dict["first_change"] = first_change
        inequality_dict["second_change"] = second_change
        inequality_dict["third_change"] = third_change
        inequality_dict["fourth_change"] = fourth_change
        inequality_dict["fifth_change"] = fifth_change
        inequality_dict["top_five_change"] = top_five_change
        inequality_list.append(inequality_dict)
    return jsonify(inequality_list)



if __name__ == '__main__':
    app.run(debug=True)