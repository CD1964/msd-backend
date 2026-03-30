    })
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
carlfdawson@Carls-MacBook-Air Downloads % cat server.js | pbcopy
carlfdawson@Carls-MacBook-Air Downloads % 
