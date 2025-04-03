// Function to fetch Pokémon data from the PokeAPI
async function searchPokemon() {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    const pokemonInfoDiv = document.getElementById('pokemon-info');
  
    // Clear previous content
    pokemonInfoDiv.innerHTML = '';
  
    if (!pokemonName) {
      pokemonInfoDiv.innerHTML = '<p class="error">Please enter a Pokémon name or ID!</p>';
      return;
    }
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      
      if (!response.ok) {
        throw new Error('Pokémon not found');
      }
  
      const data = await response.json();
  
      // Create a new HTML structure to display the Pokémon information
      const pokemonNameElement = document.createElement('h2');
      pokemonNameElement.textContent = data.name.toUpperCase();
  
      const pokemonImageElement = document.createElement('img');
      pokemonImageElement.src = data.sprites.front_default;
      pokemonImageElement.alt = data.name;
  
      const pokemonTypeElement = document.createElement('p');
      const types = data.types.map(type => type.type.name).join(', ');
      pokemonTypeElement.textContent = `Type: ${types}`;
  
      // Append all the elements to the info div
      pokemonInfoDiv.appendChild(pokemonNameElement);
      pokemonInfoDiv.appendChild(pokemonImageElement);
      pokemonInfoDiv.appendChild(pokemonTypeElement);
  
    } catch (error) {
      pokemonInfoDiv.innerHTML = `<p class="error">${error.message}</p>`;
    }
  }
  



/**
 * JavaScript (app.js):

searchPokemon() is an asynchronous function that:

Retrieves the value from the input field.

Sends a request to the PokeAPI to fetch the data of the Pokémon.

If the Pokémon is found, it dynamically creates elements to display its name, image, and types.

If the Pokémon is not found or an error occurs, it displays an error message.

Error Handling:

If the user enters an invalid Pokémon name or ID, the error message "Pokémon not found" will be displayed.

If the input field is empty, it prompts the user to enter a Pokémon name or ID.

3. Styling (Optional):
In the example above, I included simple CSS to center the content and give some spacing. You can expand on this by adding your own custom styles.

Bonus (Optional): Display Pokémon Type
The type of the Pokémon (e.g., Fire, Water) is fetched using data.types. The Pokémon's types are then displayed alongside its name and image.


 */