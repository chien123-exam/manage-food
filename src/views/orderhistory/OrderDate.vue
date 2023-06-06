<template>
   <layout>
        <template #content>
                <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>


      <section>

        <div class="section_header">
          <h2 class="section_title">注文履歴・「日次」帳票</h2>
        </div>
        <div class="container">

          <div class="filter_result">
            <div class="filter_frame">
              <table>

                <tr>
                  <th>引渡し日</th>
                  <td>
                    2022年9月1日（木）
                  </td>
                </tr>

                <tr>
                  <th>注文者</th>
                  <td>
                    秋山愛子
                  </td>
                </tr>

                <tr>
                  <th>引渡し先</th>
                  <td>
                    東京都立第一中学校
                  </td>
                </tr>

                <tr>
                  <th>商品</th>
                  <td>

                    <div class="item_result">
                      <dl>
                        <dt>
                          日替り弁当Ａ　400円× 1個
                        </dt>
                        <dd>
                          ご飯の量：普通盛り<br>
                          ご飯の種類：白ご飯<br>
                          オプション：なし
                        </dd>
                      </dl>
                    </div>

                  </td>
                </tr>

                <tr>
                  <th>支払い方法</th>
                  <td>
                    クレジットカード（ネット決済）
                  </td>
                </tr>

                <tr>
                  <th>ステータス</th>
                  <td>
                    <span class="status">引渡済</span>
                  </td>
                </tr>

              </table>
            </div>
          </div>


        </div>


        <div class="container">

          <div class="filter_total">
            <p class="price">
              合計
              <span class="total_num">1個</span>
              <span class="total_price">400円</span>
            </p>
          </div>


          <div class="button">
            <div class="flex_wrap">
              <div>
                <input type="submit" class="button02" name="back" value="戻る">
              </div>
              <div>
                <input type="submit" class="button01" name="Submit" value="この内容で出力する">
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
        </template>
   </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>