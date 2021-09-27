import $ from 'jquery';


module.exports.fetch = () => {
    var context = this;
  
  
    $.ajax({
      url: 'http://localhost:3000/products/',
      method: 'GET',
      success: function(response) {
        context.setState({
          firstName: response.firstName,
          lastName: response.lastName
        });
      }
    });
  }