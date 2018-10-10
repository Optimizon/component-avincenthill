INSERT INTO master (productid,reviewid,username,stars,title,text,timestamp,numhelpful,verifiedpurchase,imageurl)
SELECT productid,reviewid,username,stars,title,text,timestamp,numhelpful,verifiedpurchase,imageurl
from reviews;

CREATE TABLE master (
      productId int,
      reviewId int,
      username text,
      stars int,
      title text,
      text text,
      timestamp text,
      numHelpful int,
      verifiedPurchase boolean,
      imageUrl text
      ) PARTITION BY RANGE (productId);

SET constraint_exclusion = on;

-- 5 partitions --
CREATE TABLE product_1 PARTITION OF master
    FOR VALUES FROM ('1') TO ('2000001');

CREATE TABLE product_2 PARTITION OF master
    FOR VALUES FROM ('2000001') TO ('4000001');

CREATE TABLE product_3 PARTITION OF master
    FOR VALUES FROM ('4000001') TO ('6000001');

CREATE TABLE product_4 PARTITION OF master
    FOR VALUES FROM ('6000001') TO ('8000001');

CREATE TABLE product_5 PARTITION OF master
    FOR VALUES FROM ('8000001') TO ('10000001');


CREATE INDEX productindex_1 ON product_1 (productid);

CREATE INDEX productindex_2 ON product_2 (productid);

CREATE INDEX productindex_3 ON product_3 (productid);

CREATE INDEX productindex_4 ON product_4 (productid);

CREATE INDEX productindex_5 ON product_5 (productid);

CREATE INDEX productindexreview_1 ON product_1 (reviewid);

CREATE INDEX productindexreview_2 ON product_2 (reviewid);

CREATE INDEX productindexreview_3 ON product_3 (reviewid);

CREATE INDEX productindexreview_4 ON product_4 (reviewid);

CREATE INDEX productindexreview_5 ON product_5 (reviewid);



