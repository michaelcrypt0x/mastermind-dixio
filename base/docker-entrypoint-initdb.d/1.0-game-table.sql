/** File Header
 
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
	"gameId" TEXT  , 
	"feedbackId" smallint default 0 ,
	"secret" TEXT,
	"userAttempt" TEXT,
	"status" TEXT,
	"black" TEXT default 0000 ,
    "white" TEXT default 0000 ,
	"createDate" timestamp default current_timestamp
);

