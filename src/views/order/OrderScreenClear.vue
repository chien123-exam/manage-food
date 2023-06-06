<template>
    <layout>
        <template #content>
                <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>


      <section class="orange_back">
        <div class="section_header">
          <h2 class="section_title">削除内容の確認</h2>
        </div>
        <div class="container">

          <div class="order_frame">
            <table>

              <tr>
                <th>注文者</th>
                <td>
                  秋山由香里
                </td>
              </tr>

              <tr>
                <th>引渡し先</th>
                <td>
                  東京都立第一中学校
                </td>
              </tr>

              <tr>
                <th>引渡し日</th>
                <td>
                  9月6日（火）
                </td>
              </tr>

              <tr>
                <th>商品</th>
                <td>

                  <div class="item_result">
                    <dl>
                      <dt>
                        日替り弁当Ｂ　500円× 1個
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
                <th>合計</th>
                <td class="price">
                  1個　500円
                </td>
              </tr>

            </table>
          </div>
        </div>

        <div class="section_header">
          <h2 class="section_title">お支払い方法の選択</h2>
        </div>
        <div class="container">

          <div class="form_frame">
            <div class="form_box">
              <label>
                <input type="radio" name="pay" value="" checked>月末支払い（口座振替）
              </label><br>
              <a href="" class="pay_link font_16">
                お支払い設定を確認する
              </a>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="button">
            <div class="flex_wrap">
              <div>
                <input type="submit" class="button02" name="back" value="戻る">
              </div>
              <div>
                <input type="submit" class="button01" name="Submit" value="この注文の削除を確定する">
              </div>
            </div>
          </div>

        </div>
      </section>

      <div class="calendar_info">
        <p>
          ご注文期限：当日９：００まで
        </p>
        <ul>
          <li>各種注釈をここにテキスト反映します。</li>
          <li>毎週〇曜日のメニューは日替りメニューとなります。詳しくはスタッフまでご確認ください。</li>
          <li>容器回収は、原則次回お届け日の回収となります。</li>
        </ul>
      </div>

    </main>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>