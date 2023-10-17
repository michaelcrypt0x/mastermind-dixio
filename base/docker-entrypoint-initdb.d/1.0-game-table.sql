/** File Header
 Copyright (C) KNAP - All Rights Reserved

 Unauthorized copying of this file, via any medium is strictly prohibited
 Proprietary and confidential

 Written by Knap team <it.support@knap.fr>, February 2019

 NOTICE:
 All information contained herein is,
 and remains the property of KNAP SAS and its suppliers, if any.
 The intellectual and technical concepts contained herein are proprietary to KNAP SAS
 and its suppliers.
 Dissemination of this information or reproduction of this material is strictly
 forbidden unless prior written permission is obtained from KNAP SAS.

 Description:       Create Primary Tables

 Used By:			...
 Parameter(s):      @param1 - containername
                    @param2 - containerusername
					@param3 - dbname
					@param4 - dbusername
					@param5 - container path file
					@param6 - sql file name
 Usage:				docker exec @param1 -u @param2 psql @param3 @param4 -f @param5/@param6

					For default parameters
                    docker exec knap-db -u root psql knap_webservicedb root -f docker-entrypoint-initdb.d/3.0-customer-tables.sql
****************************************************************************************************
*/

/* File ChangeLog
****************************************************************************************************
Date(yyyy-mm-dd)    Author              Comments
------------------- ------------------- ------------------------------------------------------------

***************************************************************************************************
*/


\connect dixio-db;
\! echo "--------------------------------"
\! echo "--          Step 1.0          --"
\! echo "--------------------------------"
\! echo "--   Create  Table   --"
\! echo "--------------------------------"




CREATE TABLE Game(
	 "id" SERIAL PRIMARY KEY ,
	"gameId" smallint default 0 , 
	"feedBackId" smallint default 0 ,
	"secret" TEXT,
	"userAttempt" TEXT,
	"status" TEXT,
	"black" smallint default 0 ,
    "white" smallint default 0 ,
	"createDate" timestamp default current_timestamp
);

