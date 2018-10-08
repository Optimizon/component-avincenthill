-- === Sql Script Body To Test Example ===
\set productidv random(1, 10000000)

BEGIN;
select * from master where productid = :productidv;  
END;
-- === Pgbench Run Line ===
-- -c = number of concurrent database clients
-- -f = script file path
-- -j = number of threads (the clients are evenly distributed among this number of threads)
-- -n = don't run VACUUM (docs require it be set in case of custom a script)
-- -t = number of transactions each client makes
-- -U = username
-- test1 = database name
-- pgbench.exe -c 10 -f "C:\Users\'Nick Chang'\hr\sdc\component-avincenthill\database\pgbench.sql" -j 10 -n -t 10 -U postgres reviews


