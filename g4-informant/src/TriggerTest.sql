CREATE TRIGGER tr_API_id 
BEFORE INSERT ON api_foresporsel
BEGIN
    UPDATE api_foresporsel
    SET API_id = MAX(API_id) + 1
    WHERE API_id = 773
END;

CREATE TRIGGER tr_API_id
BEFORE UPDATE ON api_foresporsel
FOR EACH ROW
BEGIN
    SET NEW.API_id = MAX(API_id) + 1;
END;



-- KOPIER DETTE

CREATE FUNCTION trigger_function() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
    UPDATE api_foresporsel
    SET API_id = MAX(API_id) + 1
    WHERE API_id = 0;
END;
$$


CREATE TRIGGER last_name_changes
  BEFORE INSERT
  ON api_foresporsel
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_function();


  CREATE TABLE api_foresporsel(
     APIid SERIAL,
     tittel VARCHAR(30), 
     kategori VARCHAR(30),
     fritekst VARCHAR(30),
     PRIMARY KEY (APIid),
     FOREIGN KEY (bruker_id)
      REFERENCES bruker (bruker_id)
  );