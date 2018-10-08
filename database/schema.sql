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


CREATE TABLE product_3 PARTITION OF master
    FOR VALUES FROM ('200001') TO ('300001');

CREATE TABLE product_1 PARTITION OF master
    FOR VALUES FROM ('1') TO ('100001');

CREATE TABLE product_4 PARTITION OF master
    FOR VALUES FROM ('300001') TO ('400001');

CREATE TABLE product_2 PARTITION OF master
    FOR VALUES FROM ('100001') TO ('200001');

CREATE TABLE product_5 PARTITION OF master
    FOR VALUES FROM ('400001') TO ('500001');

CREATE TABLE product_6 PARTITION OF master
    FOR VALUES FROM ('500001') TO ('600001');

CREATE TABLE product_7 PARTITION OF master
    FOR VALUES FROM ('600001') TO ('700001');

CREATE TABLE product_8 PARTITION OF master
    FOR VALUES FROM ('700001') TO ('800001');

CREATE TABLE product_9 PARTITION OF master
    FOR VALUES FROM ('800001') TO ('900001');

CREATE TABLE product_10 PARTITION OF master
    FOR VALUES FROM ('900001') TO ('1000001');

CREATE TABLE product_11 PARTITION OF master
    FOR VALUES FROM ('1000001') TO ('1100001');

CREATE TABLE product_12 PARTITION OF master
    FOR VALUES FROM ('1100001') TO ('1200001');

CREATE TABLE product_13 PARTITION OF master
    FOR VALUES FROM ('1200001') TO ('1300001');

CREATE TABLE product_14 PARTITION OF master
    FOR VALUES FROM ('1300001') TO ('1400001');

CREATE TABLE product_15 PARTITION OF master
    FOR VALUES FROM ('1400001') TO ('1500001');

CREATE TABLE product_16 PARTITION OF master
    FOR VALUES FROM ('1500001') TO ('1600001');

CREATE TABLE product_17 PARTITION OF master
    FOR VALUES FROM ('1600001') TO ('1700001');

CREATE TABLE product_18 PARTITION OF master
    FOR VALUES FROM ('1700001') TO ('1800001');

CREATE TABLE product_19 PARTITION OF master
    FOR VALUES FROM ('1800001') TO ('1900001');

CREATE TABLE product_20 PARTITION OF master
    FOR VALUES FROM ('1900001') TO ('2000001');

CREATE TABLE product_21 PARTITION OF master
    FOR VALUES FROM ('2000001') TO ('2100001');

CREATE TABLE product_22 PARTITION OF master
    FOR VALUES FROM ('2100001') TO ('2200001');

CREATE TABLE product_23 PARTITION OF master
    FOR VALUES FROM ('2200001') TO ('2300001');

CREATE TABLE product_24 PARTITION OF master
    FOR VALUES FROM ('2300001') TO ('2400001');

CREATE TABLE product_25 PARTITION OF master
    FOR VALUES FROM ('2400001') TO ('2500001');

CREATE TABLE product_26 PARTITION OF master
    FOR VALUES FROM ('2500001') TO ('2600001');

CREATE TABLE product_27 PARTITION OF master
    FOR VALUES FROM ('2600001') TO ('2700001');

CREATE TABLE product_29 PARTITION OF master
    FOR VALUES FROM ('2800001') TO ('2900001');

CREATE TABLE product_30 PARTITION OF master
    FOR VALUES FROM ('2900001') TO ('3000001');

CREATE TABLE product_31 PARTITION OF master
    FOR VALUES FROM ('3000001') TO ('3100001');

CREATE TABLE product_32 PARTITION OF master
    FOR VALUES FROM ('3100001') TO ('3200001');

CREATE TABLE product_33 PARTITION OF master
    FOR VALUES FROM ('3200001') TO ('3300001');

CREATE TABLE product_34 PARTITION OF master
    FOR VALUES FROM ('3300001') TO ('3400001');

CREATE TABLE product_35 PARTITION OF master
    FOR VALUES FROM ('3400001') TO ('3500001');

CREATE TABLE product_36 PARTITION OF master
    FOR VALUES FROM ('3500001') TO ('3600001');

CREATE TABLE product_37 PARTITION OF master
    FOR VALUES FROM ('3600001') TO ('3700001');

CREATE TABLE product_38 PARTITION OF master
    FOR VALUES FROM ('3700001') TO ('3800001');

CREATE TABLE product_40 PARTITION OF master
    FOR VALUES FROM ('3900001') TO ('4000001');

CREATE TABLE product_41 PARTITION OF master
    FOR VALUES FROM ('4000001') TO ('4100001');

CREATE TABLE product_42 PARTITION OF master
    FOR VALUES FROM ('4100001') TO ('4200001');

CREATE TABLE product_43 PARTITION OF master
    FOR VALUES FROM ('4200001') TO ('4300001');

CREATE TABLE product_44 PARTITION OF master
    FOR VALUES FROM ('4300001') TO ('4400001');

CREATE TABLE product_45 PARTITION OF master
    FOR VALUES FROM ('4400001') TO ('4500001');

CREATE TABLE product_46 PARTITION OF master
    FOR VALUES FROM ('4500001') TO ('4600001');

CREATE TABLE product_47 PARTITION OF master
    FOR VALUES FROM ('4600001') TO ('4700001');

CREATE TABLE product_48 PARTITION OF master
    FOR VALUES FROM ('4700001') TO ('4800001');

CREATE TABLE product_49 PARTITION OF master
    FOR VALUES FROM ('4800001') TO ('4900001');

CREATE TABLE product_50 PARTITION OF master
    FOR VALUES FROM ('4900001') TO ('5000001');

CREATE TABLE product_28 PARTITION OF master
    FOR VALUES FROM ('2700001') TO ('2800001');

CREATE TABLE product_51 PARTITION OF master
    FOR VALUES FROM ('5000001') TO ('5100001');

CREATE TABLE product_52 PARTITION OF master
    FOR VALUES FROM ('5100001') TO ('5200001');

CREATE TABLE product_53 PARTITION OF master
    FOR VALUES FROM ('5200001') TO ('5300001');

CREATE TABLE product_54 PARTITION OF master
    FOR VALUES FROM ('5300001') TO ('5400001');

CREATE TABLE product_55 PARTITION OF master
    FOR VALUES FROM ('5400001') TO ('5500001');

CREATE TABLE product_56 PARTITION OF master
    FOR VALUES FROM ('5500001') TO ('5600001');

CREATE TABLE product_57 PARTITION OF master
    FOR VALUES FROM ('5600001') TO ('5700001');

CREATE TABLE product_58 PARTITION OF master
    FOR VALUES FROM ('5700001') TO ('5800001');

CREATE TABLE product_60 PARTITION OF master
    FOR VALUES FROM ('5900001') TO ('6000001');

CREATE TABLE product_59 PARTITION OF master
    FOR VALUES FROM ('5800001') TO ('5900001');

CREATE TABLE product_61 PARTITION OF master
    FOR VALUES FROM ('6000001') TO ('6100001');

CREATE TABLE product_62 PARTITION OF master
    FOR VALUES FROM ('6100001') TO ('6200001');

CREATE TABLE product_63 PARTITION OF master
    FOR VALUES FROM ('6200001') TO ('6300001');

CREATE TABLE product_64 PARTITION OF master
    FOR VALUES FROM ('6300001') TO ('6400001');

CREATE TABLE product_65 PARTITION OF master
    FOR VALUES FROM ('6400001') TO ('6500001');

CREATE TABLE product_66 PARTITION OF master
    FOR VALUES FROM ('6500001') TO ('6600001');

CREATE TABLE product_67 PARTITION OF master
    FOR VALUES FROM ('6600001') TO ('6700001');

CREATE TABLE product_68 PARTITION OF master
    FOR VALUES FROM ('6700001') TO ('6800001');

CREATE TABLE product_69 PARTITION OF master
    FOR VALUES FROM ('6800001') TO ('6900001');

CREATE TABLE product_70 PARTITION OF master
    FOR VALUES FROM ('6900001') TO ('7000001');

CREATE TABLE product_71 PARTITION OF master
    FOR VALUES FROM ('7000001') TO ('7100001');

CREATE TABLE product_73 PARTITION OF master
    FOR VALUES FROM ('7200001') TO ('7300001');

CREATE TABLE product_39 PARTITION OF master
    FOR VALUES FROM ('3800001') TO ('3900001');

CREATE TABLE product_72 PARTITION OF master
    FOR VALUES FROM ('7100001') TO ('7200001');

CREATE TABLE product_75 PARTITION OF master
    FOR VALUES FROM ('7400001') TO ('7500001');

CREATE TABLE product_74 PARTITION OF master
    FOR VALUES FROM ('7300001') TO ('7400001');

CREATE TABLE product_77 PARTITION OF master
    FOR VALUES FROM ('7600001') TO ('7700001');

CREATE TABLE product_76 PARTITION OF master
    FOR VALUES FROM ('7500001') TO ('7600001');

CREATE TABLE product_78 PARTITION OF master
    FOR VALUES FROM ('7700001') TO ('7800001');

CREATE TABLE product_79 PARTITION OF master
    FOR VALUES FROM ('7800001') TO ('7900001');

CREATE TABLE product_80 PARTITION OF master
    FOR VALUES FROM ('7900001') TO ('8000001');

CREATE TABLE product_81 PARTITION OF master
    FOR VALUES FROM ('8000001') TO ('8100001');

CREATE TABLE product_83 PARTITION OF master
    FOR VALUES FROM ('8200001') TO ('8300001');

CREATE TABLE product_82 PARTITION OF master
    FOR VALUES FROM ('8100001') TO ('8200001');

CREATE TABLE product_85 PARTITION OF master
    FOR VALUES FROM ('8400001') TO ('8500001');

CREATE TABLE product_84 PARTITION OF master
    FOR VALUES FROM ('8300001') TO ('8400001');

CREATE TABLE product_86 PARTITION OF master
    FOR VALUES FROM ('8500001') TO ('8600001');

CREATE TABLE product_87 PARTITION OF master
    FOR VALUES FROM ('8600001') TO ('8700001');

CREATE TABLE product_88 PARTITION OF master
    FOR VALUES FROM ('8700001') TO ('8800001');

CREATE TABLE product_89 PARTITION OF master
    FOR VALUES FROM ('8800001') TO ('8900001');

CREATE TABLE product_91 PARTITION OF master
    FOR VALUES FROM ('9000001') TO ('9100001');

CREATE TABLE product_90 PARTITION OF master
    FOR VALUES FROM ('8900001') TO ('9000001');

CREATE TABLE product_92 PARTITION OF master
    FOR VALUES FROM ('9100001') TO ('9200001');

CREATE TABLE product_93 PARTITION OF master
    FOR VALUES FROM ('9200001') TO ('9300001');

CREATE TABLE product_94 PARTITION OF master
    FOR VALUES FROM ('9300001') TO ('9400001');

CREATE TABLE product_95 PARTITION OF master
    FOR VALUES FROM ('9400001') TO ('9500001');

CREATE TABLE product_96 PARTITION OF master
    FOR VALUES FROM ('9500001') TO ('9600001');

CREATE TABLE product_97 PARTITION OF master
    FOR VALUES FROM ('9600001') TO ('9700001');

CREATE TABLE product_100 PARTITION OF master
    FOR VALUES FROM ('9900001') TO ('10000001');

CREATE TABLE product_98 PARTITION OF master
    FOR VALUES FROM ('9700001') TO ('9800001');

CREATE TABLE product_99 PARTITION OF master
    FOR VALUES FROM ('9800001') TO ('9900001');

CREATE INDEX index_1 ON product_1 (productid);

CREATE INDEX index_2 ON product_2 (productid);

CREATE INDEX index_3 ON product_3 (productid);

CREATE INDEX index_4 ON product_4 (productid);

CREATE INDEX index_5 ON product_5 (productid);

CREATE INDEX index_6 ON product_6 (productid);

CREATE INDEX index_7 ON product_7 (productid);

CREATE INDEX index_8 ON product_8 (productid);

CREATE INDEX index_9 ON product_9 (productid);

CREATE INDEX index_10 ON product_10 (productid);

CREATE INDEX index_11 ON product_11 (productid);

CREATE INDEX index_12 ON product_12 (productid);

CREATE INDEX index_13 ON product_13 (productid);

CREATE INDEX index_14 ON product_14 (productid);

CREATE INDEX index_15 ON product_15 (productid);

CREATE INDEX index_17 ON product_17 (productid);

CREATE INDEX index_16 ON product_16 (productid);

CREATE INDEX index_18 ON product_18 (productid);

CREATE INDEX index_19 ON product_19 (productid);

CREATE INDEX index_21 ON product_21 (productid);

CREATE INDEX index_20 ON product_20 (productid);

CREATE INDEX index_23 ON product_23 (productid);

CREATE INDEX index_22 ON product_22 (productid);

CREATE INDEX index_24 ON product_24 (productid);

CREATE INDEX index_25 ON product_25 (productid);

CREATE INDEX index_26 ON product_26 (productid);

CREATE INDEX index_27 ON product_27 (productid);

CREATE INDEX index_29 ON product_29 (productid);

CREATE INDEX index_28 ON product_28 (productid);

CREATE INDEX index_30 ON product_30 (productid);

CREATE INDEX index_31 ON product_31 (productid);

CREATE INDEX index_33 ON product_33 (productid);

CREATE INDEX index_32 ON product_32 (productid);

CREATE INDEX index_34 ON product_34 (productid);

CREATE INDEX index_36 ON product_36 (productid);

CREATE INDEX index_35 ON product_35 (productid);

CREATE INDEX index_38 ON product_38 (productid);

CREATE INDEX index_37 ON product_37 (productid);

CREATE INDEX index_39 ON product_39 (productid);

CREATE INDEX index_40 ON product_40 (productid);

CREATE INDEX index_41 ON product_41 (productid);

CREATE INDEX index_42 ON product_42 (productid);

CREATE INDEX index_43 ON product_43 (productid);

CREATE INDEX index_44 ON product_44 (productid);

CREATE INDEX index_45 ON product_45 (productid);

CREATE INDEX index_46 ON product_46 (productid);

CREATE INDEX index_48 ON product_48 (productid);

CREATE INDEX index_49 ON product_49 (productid);

CREATE INDEX index_50 ON product_50 (productid);

CREATE INDEX index_52 ON product_52 (productid);

CREATE INDEX index_51 ON product_51 (productid);

CREATE INDEX index_53 ON product_53 (productid);

CREATE INDEX index_47 ON product_47 (productid);

CREATE INDEX index_54 ON product_54 (productid);

CREATE INDEX index_55 ON product_55 (productid);

CREATE INDEX index_56 ON product_56 (productid);

CREATE INDEX index_57 ON product_57 (productid);

CREATE INDEX index_58 ON product_58 (productid);

CREATE INDEX index_59 ON product_59 (productid);

CREATE INDEX index_60 ON product_60 (productid);

CREATE INDEX index_61 ON product_61 (productid);

CREATE INDEX index_62 ON product_62 (productid);

CREATE INDEX index_63 ON product_63 (productid);

CREATE INDEX index_64 ON product_64 (productid);

CREATE INDEX index_65 ON product_65 (productid);

CREATE INDEX index_66 ON product_66 (productid);

CREATE INDEX index_67 ON product_67 (productid);

CREATE INDEX index_68 ON product_68 (productid);

CREATE INDEX index_69 ON product_69 (productid);

CREATE INDEX index_70 ON product_70 (productid);

CREATE INDEX index_71 ON product_71 (productid);

CREATE INDEX index_72 ON product_72 (productid);

CREATE INDEX index_73 ON product_73 (productid);

CREATE INDEX index_74 ON product_74 (productid);

CREATE INDEX index_75 ON product_75 (productid);

CREATE INDEX index_76 ON product_76 (productid);

CREATE INDEX index_78 ON product_78 (productid);

CREATE INDEX index_77 ON product_77 (productid);

CREATE INDEX index_79 ON product_79 (productid);

CREATE INDEX index_80 ON product_80 (productid);

CREATE INDEX index_82 ON product_82 (productid);

CREATE INDEX index_81 ON product_81 (productid);

CREATE INDEX index_83 ON product_83 (productid);

CREATE INDEX index_84 ON product_84 (productid);

CREATE INDEX index_85 ON product_85 (productid);

CREATE INDEX index_86 ON product_86 (productid);

CREATE INDEX index_88 ON product_88 (productid);

CREATE INDEX index_87 ON product_87 (productid);

CREATE INDEX index_89 ON product_89 (productid);

CREATE INDEX index_90 ON product_90 (productid);

CREATE INDEX index_91 ON product_91 (productid);

CREATE INDEX index_93 ON product_93 (productid);

CREATE INDEX index_92 ON product_92 (productid);

CREATE INDEX index_94 ON product_94 (productid);

CREATE INDEX index_95 ON product_95 (productid);

CREATE INDEX index_96 ON product_96 (productid);

CREATE INDEX index_97 ON product_97 (productid);

CREATE INDEX index_98 ON product_98 (productid);

CREATE INDEX index_99 ON product_99 (productid);

CREATE INDEX index_100 ON product_100 (productid);

-- 5 partitions --
CREATE TABLE product_1 PARTITION OF master4
    FOR VALUES FROM ('1') TO ('2000001');

CREATE TABLE product_2 PARTITION OF master4
    FOR VALUES FROM ('2000001') TO ('4000001');

CREATE TABLE product_3 PARTITION OF master4
    FOR VALUES FROM ('4000001') TO ('6000001');

CREATE TABLE product_4 PARTITION OF master4
    FOR VALUES FROM ('6000001') TO ('8000001');

CREATE TABLE product_5 PARTITION OF master4
    FOR VALUES FROM ('8000001') TO ('10000001');


CREATE INDEX masterindex_1 ON master_1 (productid);

CREATE INDEX masterindex_2 ON master_2 (productid);

CREATE INDEX masterindex_3 ON master_3 (productid);

CREATE INDEX masterindex_4 ON master_4 (productid);

CREATE INDEX masterindex_5 ON master_5 (productid);

CREATE INDEX masterindexreview_1 ON master_1 (reviewid);

CREATE INDEX masterindexreview_2 ON master_2 (reviewid);

CREATE INDEX masterindexreview_3 ON master_3 (reviewid);

CREATE INDEX masterindexreview_4 ON master_4 (reviewid);

CREATE INDEX masterindexreview_5 ON master_5 (reviewid);


