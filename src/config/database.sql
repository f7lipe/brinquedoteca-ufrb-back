CREATE TABLE "childrens" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"cpf" varchar(255) NOT NULL,
	"birthdate" timestamp with time zone NOT NULL,
	"address" varchar(255) NOT NULL,
	"obs" TEXT,
	"photo_url" varchar,
	CONSTRAINT "childrens_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "childrens_guardians" (
	"id" serial NOT NULL,
	"children_id" int NOT NULL,
	"guardian_id" int NOT NULL,
	CONSTRAINT "childrens_guardians_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "permanence" (
	"id" serial NOT NULL,
	"entry_date" timestamp with time zone NOT NULL,
	"exit_date" timestamp with time zone,
	"children_id" int NOT NULL,
	"guardian_entrance_id" int NOT NULL,
	"guardian_exit_id" int,
	CONSTRAINT "permanence_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "guardians" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"cpf" varchar(255) NOT NULL,
	"birthdate" TIMESTAMP NOT NULL,
	"address" varchar(255) NOT NULL,
	"photo_url" varchar,
	"email" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	CONSTRAINT "guardians_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "childrens_guardians" ADD CONSTRAINT "childrens_guardians_fk0" FOREIGN KEY ("children_id") REFERENCES "childrens"("id");
ALTER TABLE "childrens_guardians" ADD CONSTRAINT "childrens_guardians_fk1" FOREIGN KEY ("guardian_id") REFERENCES "guardians"("id");

ALTER TABLE "permanence" ADD CONSTRAINT "permanence_fk0" FOREIGN KEY ("children_id") REFERENCES "childrens"("id");
ALTER TABLE "permanence" ADD CONSTRAINT "permanence_fk1" FOREIGN KEY ("guardian_entrance_id") REFERENCES "guardians"("id");
ALTER TABLE "permanence" ADD CONSTRAINT "permanence_fk2" FOREIGN KEY ("guardian_exit_id") REFERENCES "guardians"("id");






