export interface Customer {
  title:                   string[];
  first_name:              string;
  last_name:               string;
  line1:                   string;
  line2:                   string;
  line3:                   string;
  line4:                   string;
  state:                   string;
  postcode:                string;
  phone_number:            string;
  notes:                   string;
  is_default_for_shipping: boolean;
  is_default_for_billing:  boolean;
  country:                 string[];
}
