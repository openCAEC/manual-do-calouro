from transformers import LEDForConditionalGeneration, LEDTokenizer
import torch
import os

tokenizer = LEDTokenizer.from_pretrained('allenai/led-large-16384')
model = LEDForConditionalGeneration.from_pretrained('allenai/led-large-16384')

# Passo 1: Abrir o arquivo
arquivo = open("input.md", "r")

# Passo 2: Ler o conteúdo do arquivo
conteudo = arquivo.read()  # ou use arquivo.readlines() para obter uma lista de linhas

# Passo 3: Fechar o arquivo
arquivo.close()


inputs = tokenizer.encode(conteudo, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs,num_beams=4, max_length=1024)
summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)

with open(f'_resumo.txt', 'w') as arquivo:
    arquivo.write(summary)


